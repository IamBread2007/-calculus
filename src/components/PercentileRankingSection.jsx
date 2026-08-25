import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Maximize2, 
  ExternalLink, 
  X, 
  Layers, 
  BookOpen, 
  Award,
  CheckCircle2,
  Info,
  ArrowUpRight
} from 'lucide-react';
import { 
  SUBJECTS_DATA, 
  COMBINATIONS_DATA, 
  calculateCandidatePercentile 
} from '../data/phoDiemDistribution';

export default function PercentileRankingSection({ enteredScores = {} }) {
  // Available list of all subjects and combinations
  const allSubjects = Object.values(SUBJECTS_DATA);
  const allCombos = Object.values(COMBINATIONS_DATA);

  // Active Category: 'auto' (Theo điểm đã nhập) | 'subjects' (Môn học) | 'combos' (Tổ hợp)
  const [activeTab, setActiveTab] = useState('auto');
  const [selectedKey, setSelectedKey] = useState('toan');
  const [customScoreInput, setCustomScoreInput] = useState('');
  
  // Modal for full-resolution chart infographic
  const [lightboxImg, setLightboxImg] = useState(null);

  // Auto-detected items from entered scores
  const autoItems = useMemo(() => {
    const items = [];
    
    // Toan
    if (enteredScores.tnthptToan && !isNaN(parseFloat(enteredScores.tnthptToan))) {
      items.push({
        key: 'toan',
        name: 'Toán học (Điểm TNTHPT)',
        score: parseFloat(enteredScores.tnthptToan),
        type: 'subject'
      });
    }

    // Mon 2 (Default: Vat li)
    if (enteredScores.tnthptMon2 && !isNaN(parseFloat(enteredScores.tnthptMon2))) {
      items.push({
        key: 'vat_li',
        name: 'Môn 2 - Vật lí (hoặc môn KHTN/KHXH)',
        score: parseFloat(enteredScores.tnthptMon2),
        type: 'subject'
      });
    }

    // Mon 3 (Default: Tieng Anh / Hoa)
    if (enteredScores.tnthptMon3 && !isNaN(parseFloat(enteredScores.tnthptMon3))) {
      items.push({
        key: 'tieng_anh',
        name: 'Môn 3 - Tiếng Anh (hoặc môn thứ 3)',
        score: parseFloat(enteredScores.tnthptMon3),
        type: 'subject'
      });
    }

    // Total combination if all 3 exist
    const toan = parseFloat(enteredScores.tnthptToan);
    const mon2 = parseFloat(enteredScores.tnthptMon2);
    const mon3 = parseFloat(enteredScores.tnthptMon3);
    if (!isNaN(toan) && !isNaN(mon2) && !isNaN(mon3)) {
      const totalCombo = toan + mon2 + mon3;
      items.push({
        key: 'A01',
        name: 'Tổ hợp A01 (Toán - Lí - Anh)',
        score: totalCombo,
        type: 'combo'
      });
      items.push({
        key: 'A00',
        name: 'Tổ hợp A00 (Toán - Lí - Hóa)',
        score: totalCombo,
        type: 'combo'
      });
      items.push({
        key: 'D01',
        name: 'Tổ hợp D01 (Toán - Văn - Anh)',
        score: totalCombo,
        type: 'combo'
      });
    }

    return items;
  }, [enteredScores]);

  // Current item info
  const currentItem = useMemo(() => {
    return SUBJECTS_DATA[selectedKey] || COMBINATIONS_DATA[selectedKey] || SUBJECTS_DATA.toan;
  }, [selectedKey]);

  // Determine active score to calculate
  const currentScore = useMemo(() => {
    if (customScoreInput !== '') {
      const num = parseFloat(customScoreInput);
      return isNaN(num) ? 0 : num;
    }

    // Auto lookup from enteredScores
    if (selectedKey === 'toan' && enteredScores.tnthptToan) {
      return parseFloat(enteredScores.tnthptToan) || 0;
    }
    if (selectedKey === 'vat_li' && enteredScores.tnthptMon2) {
      return parseFloat(enteredScores.tnthptMon2) || 0;
    }
    if (selectedKey === 'tieng_anh' && enteredScores.tnthptMon3) {
      return parseFloat(enteredScores.tnthptMon3) || 0;
    }
    if (['A00', 'A01', 'B00', 'C00', 'D01'].includes(selectedKey)) {
      const toan = parseFloat(enteredScores.tnthptToan) || 0;
      const m2 = parseFloat(enteredScores.tnthptMon2) || 0;
      const m3 = parseFloat(enteredScores.tnthptMon3) || 0;
      if (toan > 0 || m2 > 0 || m3 > 0) {
        return Number((toan + m2 + m3).toFixed(2));
      }
    }

    // Default default values for demonstration
    return currentItem.type === 'combo' ? 24.5 : 8.25;
  }, [selectedKey, customScoreInput, enteredScores, currentItem]);

  // Percentile Calculation Result
  const rankingResult = useMemo(() => {
    return calculateCandidatePercentile(selectedKey, currentScore);
  }, [selectedKey, currentScore]);

  // Active chart hover tooltip state
  const [hoveredBucket, setHoveredBucket] = useState(null);

  return (
    <section className="mt-12 bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-dark-border transition-all duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-dark-border/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dữ liệu chính thức Bộ GD&ĐT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-dark-text-main flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-[#1a2d6d] dark:text-blue-400" />
            <span>Phổ điểm & Vị thế Xếp hạng Top % Thí sinh</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-dark-text-sec mt-1">
            Tra cứu tỷ lệ cạnh tranh, percentile phân vị và so sánh thứ hạng với hàng triệu thí sinh trên cả nước.
          </p>
        </div>

        {/* Source Citation */}
        <a 
          href={currentItem.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-dark-text-sec dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-dark-hover px-3 py-2 rounded-xl border border-slate-200/60 dark:border-dark-border self-start md:self-auto"
        >
          <span>Nguồn: Cổng TTĐT Chính phủ</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mt-6 p-1.5 bg-slate-100/80 dark:bg-dark-bg/60 rounded-xl border border-slate-200/50 dark:border-dark-border/50">
        <button
          onClick={() => setActiveTab('auto')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === 'auto'
              ? 'bg-white dark:bg-dark-surface text-[#1a2d6d] dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-dark-text-sec hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Theo điểm đã nhập ({autoItems.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('subjects')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === 'subjects'
              ? 'bg-white dark:bg-dark-surface text-[#1a2d6d] dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-dark-text-sec hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Tất cả 11 Môn thi</span>
        </button>

        <button
          onClick={() => setActiveTab('combos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === 'combos'
              ? 'bg-white dark:bg-dark-surface text-[#1a2d6d] dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-dark-text-sec hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Tổ hợp xét tuyển (A00, A01, B00, C00, D01)</span>
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        {/* Selector dropdown/chips */}
        <div className="sm:col-span-2 flex flex-wrap gap-2">
          {activeTab === 'auto' && autoItems.length > 0 && (
            autoItems.map(item => (
              <button
                key={item.key}
                onClick={() => {
                  setSelectedKey(item.key);
                  setCustomScoreInput(item.score.toString());
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                  selectedKey === item.key
                    ? 'bg-[#1a2d6d] text-white border-[#1a2d6d] shadow-md shadow-blue-900/10'
                    : 'bg-white dark:bg-dark-surface text-slate-700 dark:text-dark-text-main border-slate-200 dark:border-dark-border hover:border-blue-400'
                }`}
              >
                <span>{item.name}</span>
                <span className="px-1.5 py-0.5 rounded-md bg-black/10 dark:bg-white/10 text-[11px]">
                  {item.score}đ
                </span>
              </button>
            ))
          )}

          {activeTab === 'auto' && autoItems.length === 0 && (
            <div className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/40 flex items-center gap-2">
              <Info className="w-4 h-4 flex-shrink-0" />
              <span>Hãy nhập điểm TNTHPT ở form phía trên để tự động nhận diện, hoặc chọn môn bên dưới:</span>
            </div>
          )}

          {activeTab === 'subjects' && (
            allSubjects.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedKey(sub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all border ${
                  selectedKey === sub.id
                    ? 'bg-[#1a2d6d] text-white border-[#1a2d6d] shadow-sm font-semibold'
                    : 'bg-white dark:bg-dark-surface text-slate-700 dark:text-dark-text-main border-slate-200 dark:border-dark-border hover:border-blue-400'
                }`}
              >
                {sub.name}
              </button>
            ))
          )}

          {activeTab === 'combos' && (
            allCombos.map(combo => (
              <button
                key={combo.id}
                onClick={() => setSelectedKey(combo.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all border ${
                  selectedKey === combo.id
                    ? 'bg-[#1a2d6d] text-white border-[#1a2d6d] shadow-sm font-semibold'
                    : 'bg-white dark:bg-dark-surface text-slate-700 dark:text-dark-text-main border-slate-200 dark:border-dark-border hover:border-blue-400'
                }`}
              >
                {combo.name}
              </button>
            ))
          )}
        </div>

        {/* Custom score input field */}
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-dark-bg/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-dark-border">
          <span className="text-xs font-semibold text-slate-600 dark:text-dark-text-sec whitespace-nowrap">
            Điểm cần tra:
          </span>
          <input 
            type="number"
            min="0"
            max={currentItem.maxScore}
            step="0.05"
            value={customScoreInput !== '' ? customScoreInput : currentScore}
            onChange={(e) => setCustomScoreInput(e.target.value)}
            className="w-full bg-white dark:bg-dark-surface px-2.5 py-1 text-sm font-bold text-[#1a2d6d] dark:text-blue-400 rounded-lg border border-slate-200 dark:border-dark-border text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Nhập điểm..."
          />
          <span className="text-xs font-bold text-slate-400">/{currentItem.maxScore}đ</span>
        </div>
      </div>

      {/* Main Ranking Display Cards */}
      {rankingResult && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Hero Card: Percentile Standing */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-[#13224f] to-[#1a2d6d] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            {/* Background ambient decorative shapes */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-blue-200 font-semibold flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  Vị thế cạnh tranh toàn quốc
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-blue-100 border border-white/10">
                  {currentItem.name}
                </span>
              </div>

              {/* Big Percentile Badge */}
              <div className="mt-6">
                <div className="text-xs text-blue-200/80 mb-1">Xếp hạng của bạn:</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-sm">
                    TOP {rankingResult.topPercent}%
                  </span>
                </div>
                <div className="mt-2 text-sm text-blue-100 font-medium">
                  Vượt qua <strong className="text-amber-300 font-bold">{rankingResult.outrankedPercent}%</strong> thí sinh trên cả nước ({rankingResult.lowerCount.toLocaleString('vi-VN')} người).
                </div>
              </div>

              {/* Tier Tag */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-white backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{rankingResult.tier}</span>
              </div>

              {/* Opportunity evaluation */}
              <p className="mt-4 text-xs leading-relaxed text-blue-100/90 bg-white/5 border border-white/10 p-3 rounded-xl">
                💡 <strong className="text-white">Nhận định:</strong> {rankingResult.evaluation}
              </p>
            </div>

            {/* Candidate Counts Grid */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-blue-200/80">Điểm cao hơn bạn</div>
                <div className="text-lg font-bold text-amber-300 mt-0.5">
                  ~{rankingResult.higherCount.toLocaleString('vi-VN')}
                </div>
                <div className="text-[10px] text-blue-200/60">thí sinh</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="text-[11px] text-blue-200/80">Tổng thí sinh cả nước</div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {rankingResult.totalCandidates.toLocaleString('vi-VN')}
                </div>
                <div className="text-[10px] text-blue-200/60">thí sinh dự thi</div>
              </div>
            </div>
          </div>

          {/* Right Card: Interactive Score Distribution Curve & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50/70 dark:bg-dark-bg/60 rounded-2xl p-6 border border-slate-200/60 dark:border-dark-border/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800 dark:text-dark-text-main flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Phổ điểm & Vị trí trên đường cong phân bố</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-dark-text-sec">
                  Mức điểm: <strong className="text-[#1a2d6d] dark:text-blue-400 font-bold">{rankingResult.score}đ</strong>
                </span>
              </div>

              {/* Visual Histogram Chart */}
              <div className="relative pt-6 pb-2">
                {/* User indicator marker */}
                <div 
                  className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center transition-all duration-300 z-10"
                  style={{
                    left: `${Math.min(96, Math.max(4, (rankingResult.score / currentItem.maxScore) * 100))}%`
                  }}
                >
                  <span className="bg-[#1a2d6d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Bạn ({rankingResult.score}đ)
                  </span>
                  <div className="w-0.5 h-4 bg-[#1a2d6d] dark:bg-blue-400" />
                </div>

                {/* Histogram Bars Container */}
                <div className="h-32 flex items-end gap-1 sm:gap-1.5 pt-4 px-1 border-b border-slate-300 dark:border-dark-border">
                  {rankingResult.buckets.map((b, idx) => {
                    const isUserBucket = Math.abs(b.score - rankingResult.score) < (currentItem.maxScore / 30);
                    const isHovered = hoveredBucket === idx;
                    const heightPercent = Math.max(6, Math.min(100, (b.count / (rankingResult.totalCandidates * 0.12)) * 100));

                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredBucket(idx)}
                        onMouseLeave={() => setHoveredBucket(null)}
                        className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${heightPercent}%` }}
                          transition={{ duration: 0.4, delay: idx * 0.01 }}
                          className={`w-full rounded-t-sm transition-all ${
                            isUserBucket
                              ? 'bg-gradient-to-t from-amber-500 to-amber-400 ring-2 ring-amber-400/50 shadow-md shadow-amber-500/20'
                              : isHovered
                              ? 'bg-blue-600 dark:bg-blue-400'
                              : 'bg-blue-400/60 dark:bg-blue-600/40 hover:bg-blue-500/80'
                          }`}
                        />

                        {/* Tooltip on hover */}
                        {isHovered && (
                          <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[10px] px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-20 pointer-events-none">
                            <div className="font-bold">{b.score} điểm</div>
                            <div>{b.count.toLocaleString('vi-VN')} thí sinh ({b.percentage}%)</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-[10px] font-mono text-slate-400 dark:text-dark-text-sec mt-1 px-1">
                  <span>0đ</span>
                  <span>{currentItem.maxScore / 4}đ</span>
                  <span>{currentItem.maxScore / 2}đ (TB)</span>
                  <span>{(currentItem.maxScore * 3) / 4}đ</span>
                  <span>{currentItem.maxScore}đ</span>
                </div>
              </div>

              {/* Statistical Parameters */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="bg-white dark:bg-dark-surface p-2.5 rounded-xl border border-slate-200/70 dark:border-dark-border">
                  <div className="text-slate-400 dark:text-dark-text-sec text-[10px]">Điểm trung bình (μ)</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-dark-text-main mt-0.5">
                    {currentItem.mean}đ
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-surface p-2.5 rounded-xl border border-slate-200/70 dark:border-dark-border">
                  <div className="text-slate-400 dark:text-dark-text-sec text-[10px]">Điểm trung vị (Med)</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-dark-text-main mt-0.5">
                    {currentItem.median}đ
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-surface p-2.5 rounded-xl border border-slate-200/70 dark:border-dark-border">
                  <div className="text-slate-400 dark:text-dark-text-sec text-[10px]">Điểm nhiều nhất (Mode)</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-dark-text-main mt-0.5">
                    {currentItem.mode}đ
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-surface p-2.5 rounded-xl border border-slate-200/70 dark:border-dark-border">
                  <div className="text-slate-400 dark:text-dark-text-sec text-[10px]">Độ lệch chuẩn (σ)</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-dark-text-main mt-0.5">
                    {currentItem.stdDev}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Official Sơ đồ Phổ điểm Infographic Gallery (Scraped from chinhphu.vn) */}
      <div className="mt-10 pt-6 border-t border-slate-100 dark:border-dark-border/60">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-base text-slate-800 dark:text-dark-text-main">
              Ảnh Sơ đồ Phổ điểm Gốc Bộ GD&ĐT ({currentItem.charts.length} biểu đồ)
            </h3>
          </div>
          <span className="text-xs text-slate-400">Nhấn vào ảnh để xem kích thước lớn</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentItem.charts.map((chart, idx) => (
            <div 
              key={idx}
              onClick={() => setLightboxImg(chart)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-bg cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900/5">
                <img 
                  src={chart.src} 
                  alt={chart.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay icon */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 dark:bg-dark-surface/90 text-slate-800 dark:text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Phóng to</span>
                </div>
              </div>

              <div className="p-2.5 bg-white dark:bg-dark-surface border-t border-slate-100 dark:border-dark-border">
                <div className="text-xs font-medium text-slate-700 dark:text-dark-text-main truncate">
                  {chart.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full-Resolution Charts */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 dark:border-dark-border"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-bg">
                <h4 className="text-sm font-bold text-slate-800 dark:text-dark-text-main">
                  {lightboxImg.title}
                </h4>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-dark-hover transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="overflow-auto p-4 flex items-center justify-center bg-slate-900/5 dark:bg-black/40">
                <img 
                  src={lightboxImg.fullSrc || lightboxImg.src} 
                  alt={lightboxImg.title}
                  className="max-h-[72vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border flex items-center justify-between text-xs text-slate-500 dark:text-dark-text-sec">
                <span>Nguồn công bố: Cổng Thông tin điện tử Chính phủ & Bộ GD&ĐT</span>
                <a 
                  href={lightboxImg.fullSrc || lightboxImg.src} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Mở ảnh gốc</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
