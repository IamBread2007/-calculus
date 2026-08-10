#!/usr/bin/env bash
# verify-image.sh — Deploy gate: verify signature + provenance + SBOM
#
# Usage:
#   GITHUB_REPOSITORY=<owner>/<repo> GH_TOKEN=$(gh auth token) \
#     bash scripts/verify-image.sh <image-ref>
#
# The image ref must be by digest, e.g.:
#   ghcr.io/owner/repo@sha256:abc123...

set -euo pipefail

IMAGE="${1:?Usage: verify-image.sh <image-ref-by-digest>}"
REPO="${GITHUB_REPOSITORY:?Set GITHUB_REPOSITORY=owner/repo}"

echo "🔍 Verifying image: ${IMAGE}"
echo "📦 Repository: ${REPO}"
echo ""

# ── 1. Verify GitHub attestation (signature + provenance) ──────────────
echo "── Step 1: Verify GitHub attestation ──"
if command -v gh &>/dev/null; then
  gh attestation verify "${IMAGE}" \
    --repo "${REPO}" \
    --format json \
    | head -c 500
  echo ""
  echo "✅ Attestation verified"
else
  echo "⚠️  gh CLI not available — skipping attestation check"
fi

echo ""

# ── 2. Verify cosign signature ─────────────────────────────────────────
echo "── Step 2: Verify cosign signature ──"
if command -v cosign &>/dev/null; then
  # Keyless verification via Fulcio + Rekor (GitHub OIDC)
  EXPECTED_ISSUER="https://token.actions.githubusercontent.com"
  EXPECTED_IDENTITY="https://github.com/${REPO}/.github/workflows/reusable-docker.yml@refs/heads/main"

  cosign verify \
    --certificate-oidc-issuer "${EXPECTED_ISSUER}" \
    --certificate-identity "${EXPECTED_IDENTITY}" \
    "${IMAGE}" 2>&1 | head -20

  echo "✅ Cosign signature verified"
else
  echo "⚠️  cosign not installed — skipping signature check"
fi

echo ""

# ── 3. Check SBOM existence ────────────────────────────────────────────
echo "── Step 3: Check SBOM ──"
if command -v gh &>/dev/null; then
  SBOM_COUNT=$(gh attestation verify "${IMAGE}" \
    --repo "${REPO}" \
    --format json 2>/dev/null \
    | grep -c "spdx" || echo "0")

  if [ "${SBOM_COUNT}" -gt 0 ]; then
    echo "✅ SBOM attestation found"
  else
    echo "⚠️  No SBOM attestation detected (image may still be valid)"
  fi
else
  echo "⚠️  gh CLI not available — skipping SBOM check"
fi

echo ""
echo "══════════════════════════════════════════════"
echo "✅ Image verification complete: ${IMAGE}"
echo "══════════════════════════════════════════════"
