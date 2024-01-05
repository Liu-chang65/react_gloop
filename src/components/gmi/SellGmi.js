import { useState } from 'react';
import Info from '../Info';

export default function SellGmi() {
    const [activeTab, setActiveTab] = useState('Buy GMI')
    return (
        <div>
            <div className="radius-8 bg-trans p-3">
                <div className='d-flex v-center space-between'>
                    <div>
                        <div className='font-20 bold-700 color-white text-center'>Coming Soon</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}