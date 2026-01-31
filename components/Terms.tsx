
import React, { useEffect } from 'react';
import { ArrowLeft, FileText, ShieldAlert, Scale, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-body text-gray-800">
      
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6 border border-white/20">
                <FileText size={40} className="text-brand-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
              服務條款與購物須知
            </h1>
            <p className="text-gray-400 font-light tracking-wide text-sm uppercase">
              Terms of Service & Subscription Policy
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto -mt-10 px-6 pb-24 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-16 border border-gray-200">
            
            <div className="mb-12 border-b border-gray-100 pb-8">
                <p className="text-sm text-gray-500 mb-2">生效日期：2025年1月1日</p>
                <p className="text-gray-600 leading-relaxed font-light">
                    歡迎使用 birthplan+subscrybebe 訂閱服務。在您開始訂製與訂閱生命之前，請務必詳閱以下條款。本條款詳述了雙方的權利義務，特別關於產品（寶寶）的孵育、交付、退訂及回收機制。一旦您完成付費，即視為同意本合約之所有內容。
                </p>
            </div>

            <div className="space-y-12">
                
                {/* 1. 訂閱機制 */}
                <section>
                    <h2 className="text-2xl font-heading font-black text-brand-blue mb-4 flex items-center gap-3">
                        <Clock className="text-brand-gold" size={24} />
                        1. 訂閱週期與計費機制
                    </h2>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-4 text-gray-700">
                        <p>
                            <span className="font-bold text-brand-dark">1.1 計費起始：</span>
                            帳單週期自<span className="font-bold underline decoration-brand-gold decoration-2">基因合成第一天</span>開始計算。
                        </p>
                        <p>
                            <span className="font-bold text-brand-dark">1.2 孵育期費用：</span>
                            在寶寶出生（出貨）前，訂閱者每月需繳交月費，此費用包含基因維護與人工子宮運作成本，以進行胚胎養育。
                        </p>
                        <p>
                            <span className="font-bold text-brand-dark">1.3 撫養期費用：</span>
                            寶寶出生後，訂閱者需每月持續繳交月費方能擁有寶寶之監護與使用權。
                        </p>
                        <p>
                            <span className="font-bold text-brand-dark">1.4 合約終止：</span>
                            帳單週期截止日為寶寶成長至 <span className="font-bold">18歲的第12個月</span>。期滿後，寶寶將脫離本公司訂閱制度，獲得完全自主權。
                        </p>
                    </div>
                </section>

                {/* 2. 退訂機制 (不想養了) */}
                <section>
                    <h2 className="text-2xl font-heading font-black text-brand-blue mb-4 flex items-center gap-3">
                        <Scale className="text-brand-gold" size={24} />
                        2. 退訂與回收機制 (Cancellation Policy)
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                        <p className="text-sm text-gray-600 mb-2 font-bold">⚠️ 重要聲明</p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            訂閱者能於任何時間取消訂閱，但在取消後需持續扶養寶寶直到該期帳單週期結束。
                            <br/>
                            <span className="text-red-600 font-bold">週期結束隔日將有專員到府回收小孩。退訂後不可再重新訂閱。</span>
                        </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200 space-y-8 text-gray-700">
                        
                        {/* <0y */}
                        <div>
                            <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">2.1 孵育期退訂 (&lt; 0歲)</h3>
                            <p className="mb-2 text-sm text-gray-500">正常寶寶孵育時長為 40 週</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <span className="font-bold">小於 24 週：</span>
                                    將以墮胎方式處理胚胎。
                                </li>
                                <li>
                                    <span className="font-bold">大於 24 週：</span>
                                    將由專員評估胚胎之經濟價值後，選擇墮胎或是由公司回收培養成「福利寶寶」。
                                </li>
                                <li>
                                    <span className="font-bold">加速方案條款：</span>
                                    若屬於加速孵育方案之胚胎，墮胎判斷時長將按照「加速週期 / 40週」之比例進行換算。
                                </li>
                            </ul>
                        </div>

                        {/* 0y - 1y */}
                        <div>
                            <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">2.2 嬰兒期退訂 (0歲 - 1歲)</h3>
                            <p>
                                若在 0 歲到 1 歲之間被退訂，經公司回收後，寶寶將被歸類為<span className="font-bold text-brand-blue">「退訂寶寶 (Returned Baby)」</span>，並提供給 A 方案的顧客進行選購。
                            </p>
                        </div>

                        {/* 1y - 18y */}
                        <div>
                            <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">2.3 成長期退訂 (1歲 - 18歲)</h3>
                            <p className="mb-3">
                                若寶寶在 1 歲到 18 歲之間被退訂，公司將接手監護權，並提供基礎生活所需、教育及職涯規劃。依年齡區分為：
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                                    <span className="block text-brand-gold font-bold text-xl mb-1">1 - 12 歲</span>
                                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">研究對象</span>
                                    <p className="text-sm">
                                        孩子將會生活在 birthplan+ 研究室，成為基因工程研究的研究對象，協助優化下一代產品數據。
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                                    <span className="block text-brand-gold font-bold text-xl mb-1">12 - 18 歲</span>
                                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">職訓計畫</span>
                                    <p className="text-sm">
                                        孩子將配合完善的職訓計畫，擇一學習公司各部門專業，同時賺取生活費到 18 歲。18 歲後可選擇繼續在本公司工作或領取 12-18 歲所賺取的生活費到外生活。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 3. 退貨機制 (品質不好) */}
                <section>
                    <h2 className="text-2xl font-heading font-black text-brand-blue mb-4 flex items-center gap-3">
                        <ShieldAlert className="text-brand-gold" size={24} />
                        3. 退貨與保固機制 (Return Policy)
                    </h2>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-4 text-gray-700">
                        <p>
                            本公司致力於提供完美的基因產品，若您發現產品有瑕疵，我們提供以下保障：
                        </p>
                        <div className="space-y-4 mt-4">
                            <div>
                                <h4 className="font-bold text-brand-dark">3.1 一歲內瑕疵退貨</h4>
                                <p>
                                    若發現寶寶在<span className="font-bold">一歲以前</span>有品質缺漏、不符合預期（如：基因表現與訂單不符），經專員驗證確實後，可<span className="font-bold text-brand-blue">無條件退貨</span>。訂閱者將獲得一次重新訂閱服務之權利（免除首期基因合成費與孵育期間之月費）。
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark">3.2 特殊案例補償</h4>
                                <p>
                                    若在寶寶<span className="font-bold">一歲後</span>才發現基因重大瑕疵或問題，請聯絡公司專員進行個案評估與後續補償協商。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* 4. 免責聲明 */}
                 <section>
                    <h2 className="text-2xl font-heading font-black text-brand-blue mb-4 flex items-center gap-3">
                        <AlertTriangle className="text-brand-gold" size={24} />
                        4. 免責聲明
                    </h2>
                    <div className="pl-4 border-l-2 border-gray-200 text-gray-600 text-sm leading-relaxed">
                        <p>
                            birthplan+subscrybebe 僅提供生物基因優化與孵育技術服務。對於寶寶成長過程中因後天環境、教養方式或不可抗力因素（如突發意外）所導致的性格偏差或發展不如預期，本公司不負擔擔保責任。所有基因選購項目（如智商、性格傾向）僅代表生物學上的潛能提升，非絕對結果之保證。
                        </p>
                    </div>
                </section>

            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">

                <Link 
                to="/" 
                className="inline-flex items-center bg-brand-dark text-white hover:bg-brand-blue px-8 py-3 rounded-full transition-colors uppercase tracking-widest text-sm font-heading font-bold shadow-lg hover:shadow-xl"
                >
                <ArrowLeft className="mr-2" size={18} />
                Return Home
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
