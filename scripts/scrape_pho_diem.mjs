import fs from 'fs';
import https from 'https';
import zlib from 'zlib';

const urls = [
  { id: 'to_hop', name: 'Tổ hợp A00, A01, B00, C00, D01', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm' },
  { id: 'tieng_anh', name: 'Tiếng Anh', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-tieng-anh-ky-thi-tot-nghiep-nam-2026-119260701100900533.htm' },
  { id: 'gdkt_pl', name: 'Giáo dục kinh tế và pháp luật', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-giao-duc-kinh-te-va-phap-luat-ky-thi-tot-nghiep-nam-2026-119260701100523092.htm' },
  { id: 'cn_nong_nghiep', name: 'Công nghệ nông nghiệp', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-cong-nghe-nong-nghiep-ky-thi-tot-nghiep-nam-2026-11926070110001993.htm' },
  { id: 'cn_cong_nghiep', name: 'Công nghệ công nghiệp', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-cong-nghe-cong-nghiep-ky-thi-tot-nghiep-nam-2026-119260701095543115.htm' },
  { id: 'dia_li', name: 'Địa lí', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-dia-li-ky-thi-tot-nghiep-nam-2026-119260701095020909.htm' },
  { id: 'lich_su', name: 'Lịch sử', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-lich-su-ky-thi-tot-nghiep-nam-2026-119260701094423566.htm' },
  { id: 'tin_hoc', name: 'Tin học', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-tin-hoc-ky-thi-tot-nghiep-nam-2026-119260701094014188.htm' },
  { id: 'sinh_hoc', name: 'Sinh học', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-sinh-hoc-ky-thi-tot-nghiep-nam-2026-119260701093449928.htm' },
  { id: 'hoa_hoc', name: 'Hóa học', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-hoa-hoc-ky-thi-tot-nghiep-nam-2026-119260701092458209.htm' },
  { id: 'vat_li', name: 'Vật lí', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-vat-li-ky-thi-tot-nghiep-nam-2026-119260701091832054.htm' },
  { id: 'toan', name: 'Toán', url: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-toan-ky-thi-tot-nghiep-nam-2026-119260701090505772.htm' }
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Accept-Encoding': 'gzip, deflate' } }, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const encoding = res.headers['content-encoding'];
        if (encoding === 'gzip') {
          zlib.gunzip(buffer, (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded.toString('utf-8'));
          });
        } else if (encoding === 'deflate') {
          zlib.inflate(buffer, (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded.toString('utf-8'));
          });
        } else {
          resolve(buffer.toString('utf-8'));
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const results = [];
  for (const item of urls) {
    try {
      console.log(`Fetching ${item.name}...`);
      const html = await fetchUrl(item.url);
      
      // Title
      const titleMatch = html.match(/<h1[^>]*class="[^"]*detail-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      // All images
      const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
      const images = imgMatches.map(m => {
        const fullTag = m[0];
        const src = m[1];
        const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
        const titleMatch = fullTag.match(/title=["']([^"']*)["']/i);
        return {
          src,
          alt: altMatch ? altMatch[1] : '',
          title: titleMatch ? titleMatch[1] : ''
        };
      }).filter(img => img.src.includes('cdnchinhphu.vn') && !img.src.includes('logo') && !img.src.includes('icon'));

      // Detail content
      const contentMatch = html.match(/<div[^>]*class="[^"]*detail-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div[^>]*class="(?:detail-author|box-tag))/i) ||
                           html.match(/<div[^>]*class="[^"]*detail-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
      
      const contentHtml = contentMatch ? contentMatch[1] : '';

      // Paragraphs
      const pMatches = [...contentHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
      const paragraphs = pMatches.map(p => p[1].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);

      // Tables
      const tableMatches = [...contentHtml.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/gi)];
      const tables = tableMatches.map(t => {
        const rows = [...t[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(r => {
          const cells = [...r[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c => 
            c[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
          );
          return cells;
        });
        return rows;
      });

      results.push({
        id: item.id,
        name: item.name,
        url: item.url,
        title,
        images,
        paragraphs,
        tables
      });
    } catch (err) {
      console.error(`Error fetching ${item.name}:`, err);
    }
  }

  fs.writeFileSync('./scraped_pho_diem.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Successfully saved to scraped_pho_diem.json! Total items:', results.length);
}

run();
