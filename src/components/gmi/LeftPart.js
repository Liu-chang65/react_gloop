import Info from '../Info';

export default function LeftPart() {
    return (
        <div className="radius-8 bg-trans p-4 min-h-455">
            <div className='d-flex v-center space-between'>
                <div className='font-18 bold-600 color-white'>GMI</div>
                <div className='font-16 bold-700 color-white bg-trans radius-8 py-2 px-3'>20% APY</div>
            </div>
            <div>
                <hr className='hr-3 border-dark-green'/>
            </div>
            <div className='d-flex v-center space-between'>
                <div>
                    <div className='font-16 bold-300 color-gray my-3'>
                        <span className='mr-10' >GMI Price</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem111"/>
                    </div>
                    <div className='font-16 bold-300 color-gray my-3'>
                        <span className='mr-10' >TVL</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem222"/>
                    </div>
                    <div className='font-16 bold-300 color-gray my-3'>
                        <span className='mr-10' >Total Supply</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem3333"/>
                    </div>
                </div>
                <div>
                    <div className='font-16 bold-700 color-white my-3'>
                        $0.00
                    </div>
                    <div className='font-16 bold-700 color-white my-3'>
                        $0.00
                    </div>
                    <div className='font-16 bold-700 color-white my-3'>
                        0 GMI
                    </div>
                </div>
            </div>
            <div>
                <hr className='hr-1 border-dark-green'/>
            </div>
            <div className='d-flex v-center space-between'>
                <div>
                    <div className='font-16 bold-300 color-gray my-3'>
                        <span className='mr-10' >Staked</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem44"/>
                    </div>
                    <div className='font-16 bold-300 color-gray my-3 d-flex'>
                        <span className='mr-10' >Rewards</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem55"/>
                    </div>
                    <div className='font-16 bold-300 color-gray my-3'>
                        <span className='mr-10' >Total Value</span>
                        <Info content="Lorem ipsum dolor sit amet consectetur lorem66"/>
                    </div>
                </div>
                <div>
                    <div className='font-16 bold-700 color-white my-3'>
                        0 GMI
                    </div>
                    <div className='font-16 bold-700 color-white my-3'>
                        0 GMI
                    </div>
                    <div className='font-16 bold-700 color-white my-3'>
                        $0.00
                    </div>
                </div>
            </div>
        </div>
    )
}