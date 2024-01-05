import { useState } from 'react';
import BuyGmi from './BuyGmi';
import SellGmi from './SellGmi';

export default function RightPart() {
    const [activeTab, setActiveTab] = useState('Buy GMI')
    return (
        <div className="radius-8 bg-trans p-4 min-h-455">
            <div className='d-flex v-center space-between'>
                <div className='w-100'>
                    <div className="font-18 bold-600 color-white text-center cursur-pointer py-2" onClick={() => setActiveTab('Buy GMI')}>Buy GMI</div>
                    <hr className={`hr-3 border-dark-green ${activeTab == "Buy GMI" ? "active_gmi_tab" : ""}`}/>
                </div>
                <div className='w-100'>
                    <div className="font-18 bold-600 color-white text-center cursur-pointer py-2" onClick={() => setActiveTab('Sell GMI')}>Sell GMI</div>
                    <hr className={`hr-3 border-dark-green ${activeTab == "Sell GMI" ? "active_gmi_tab" : ""}`} />
                </div>
            </div>
            {
                activeTab == "Buy GMI" ? (
                    <BuyGmi />
                ) : (
                    <SellGmi />
                )
            }
        </div>
    )
}