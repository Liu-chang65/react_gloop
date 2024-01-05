import { useState } from 'react';
import Info from '../Info';
import FromGmi from './FromGmi';
import ToGmi from './ToGmi';
import gmi_img8_url from '../../assets/img/gmi_img8.svg';
import { Button } from 'react-bootstrap';

export default function BuyGmi() {
    const [replace, setReplace] = useState(true);

    return (
        <div>
            <div>
                {
                    replace ? (
                        <FromGmi/>
                    ) : (
                        <ToGmi/>
                    )
                }
            </div>
            <div className='text-center btn-swap'>
                <img src={gmi_img8_url} width={48} className='cursur-pointer' onClick={()=>setReplace(!replace)}/>
            </div>
            <div>
                {
                    replace ? (
                        <ToGmi/>
                    ) : (
                        <FromGmi/>
                    )
                }
            </div>
            <div className='d-flex space-between v-center py-4'>
                <div>
                    <span className='mr-10 font-16 bold-300 color-gray' >Fees</span>
                    <Info content="Lorem ipsum dolor sit amet consectetur lorem"/>
                </div>
                <div className='font-16 bold-700 color-white'>
                    $ 0 (0%)
                </div>
            </div>
            <div>
                <Button className='font-16 bold-700 radius-8 bg-green border-green color-dark p-10-25 my-2 w-100'>Buy GMI</Button>
            </div>
        </div>  
    )
}