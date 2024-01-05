import { Table } from 'react-bootstrap';
import gmi_img4_url from '../../assets/img/gmi_img4.svg';
import gmi_img5_url from '../../assets/img/gmi_img5.svg';
import gmi_img6_url from '../../assets/img/gmi_img6.svg';
import gmi_img7_url from '../../assets/img/gmi_img7.svg';

export default function GmiBasket() {
    return (
        <div className="radius-8 bg-trans p-4 ">
            <div className='font-18 bold-700 color-white'>GMI Basket</div>
            <div>
                <hr className='hr-3 border-dark-green'/>
            </div>
            <div className='desktop-show'>
                <Table borderless className='gmi_basket_table'>
                    <thead >
                        <tr>
                            <th className='color-gray font-16 bold-300  py-3'>Asset</th>
                            <th className='color-gray font-16 bold-300  py-3'>Price</th>
                            <th className='color-gray font-16 bold-300  py-3'>Available</th>
                            <th className='color-gray font-16 bold-300  py-3'>Current</th>
                            <th className='color-gray font-16 bold-300  py-3'>Target</th>
                            <th className='color-gray font-16 bold-300  py-3'>Deposit Fee</th>
                            <th className='color-gray font-16 bold-300  py-3'>Withdrawal Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='cursur-pointer py-3'>
                            <td>
                                <img src={gmi_img4_url} width={22} className='mr-10'/><span className='color-white font-16 bold-700 '>ETH GM</span>
                            </td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                        </tr>
                        <tr className='cursur-pointer py-3'>
                            <td>
                                <img src={gmi_img5_url} width={22} className='mr-10'/><span className='color-white font-16 bold-700 '>ETH GM</span>
                            </td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400 '>0.00%</td>
                        </tr>
                        <tr className='cursur-pointer py-3'>
                            <td>
                                <img src={gmi_img6_url} width={22} className='mr-10'/><span className='color-white font-16 bold-700 '>ETH GM</span>
                            </td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400 '>0.00%</td>
                        </tr>
                        <tr className='cursur-pointer py-3'>
                            <td>
                                <img src={gmi_img7_url} width={22} className='mr-10'/><span className='color-white font-16 bold-700 '>ETH GM</span>
                            </td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                            <td className='color-white font-16 bold-400'>0.00%</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
            <div className='mobile-show'>
                <div className='d-flex space-between'>
                    <div>
                        <div className='color-gray font-14 bold-300  py-2'>Asset</div>
                        <div className='color-gray font-14 bold-300  py-2'>Price</div>
                        <div className='color-gray font-14 bold-300  py-2'>Available</div>
                        <div className='color-gray font-14 bold-300  py-2'>Composition</div>
                        <div className='color-gray font-14 bold-300  py-2'>Target</div>
                        <div className='color-gray font-14 bold-300  py-2'>Deposit Fee</div>
                        <div className='color-gray font-14 bold-300  py-2'>Withdrawal Fee</div>
                    </div>
                    <div className='text-end'>
                        <div className='py-2'>
                            <img src={gmi_img4_url} width={22} className='mr-10'/><span className='color-white font-14 bold-700 '>ETH GM</span>
                        </div>
                        <div className='color-white font-14 bold-400  py-2'>1.060</div>
                        <div className='color-white font-14 bold-400  py-2'>405,522.98</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                    </div>
                </div>
                <div>
                    <hr className='hr-1 border-dark-green'/>
                </div>
                <div className='d-flex space-between'>
                    <div>
                        <div className='color-gray font-14 bold-300  py-2'>Asset</div>
                        <div className='color-gray font-14 bold-300  py-2'>Price</div>
                        <div className='color-gray font-14 bold-300  py-2'>Available</div>
                        <div className='color-gray font-14 bold-300  py-2'>Composition</div>
                        <div className='color-gray font-14 bold-300  py-2'>Target</div>
                        <div className='color-gray font-14 bold-300  py-2'>Deposit Fee</div>
                        <div className='color-gray font-14 bold-300  py-2'>Withdrawal Fee</div>
                    </div>
                    <div className='text-end'>
                        <div className='py-2'>
                            <img src={gmi_img5_url} width={22} className='mr-10'/><span className='color-white font-14 bold-700 '>ETH GM</span>
                        </div>
                        <div className='color-white font-14 bold-400  py-2'>1.060</div>
                        <div className='color-white font-14 bold-400  py-2'>405,522.98</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                    </div>
                </div>
                <div>
                    <hr className='hr-1 border-dark-green'/>
                </div>
                <div className='d-flex space-between'>
                    <div>
                        <div className='color-gray font-14 bold-300  py-2'>Asset</div>
                        <div className='color-gray font-14 bold-300  py-2'>Price</div>
                        <div className='color-gray font-14 bold-300  py-2'>Available</div>
                        <div className='color-gray font-14 bold-300  py-2'>Composition</div>
                        <div className='color-gray font-14 bold-300  py-2'>Target</div>
                        <div className='color-gray font-14 bold-300  py-2'>Deposit Fee</div>
                        <div className='color-gray font-14 bold-300  py-2'>Withdrawal Fee</div>
                    </div>
                    <div className='text-end'>
                        <div className='py-2'>
                            <img src={gmi_img6_url} width={22} className='mr-10'/><span className='color-white font-14 bold-700 '>ETH GM</span>
                        </div>
                        <div className='color-white font-14 bold-400  py-2'>1.060</div>
                        <div className='color-white font-14 bold-400  py-2'>405,522.98</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                    </div>
                </div>
                <div>
                    <hr className='hr-1 border-dark-green'/>
                </div>
                <div className='d-flex space-between'>
                    <div>
                        <div className='color-gray font-14 bold-300  py-2'>Asset</div>
                        <div className='color-gray font-14 bold-300  py-2'>Price</div>
                        <div className='color-gray font-14 bold-300  py-2'>Available</div>
                        <div className='color-gray font-14 bold-300  py-2'>Composition</div>
                        <div className='color-gray font-14 bold-300  py-2'>Target</div>
                        <div className='color-gray font-14 bold-300  py-2'>Deposit Fee</div>
                        <div className='color-gray font-14 bold-300  py-2'>Withdrawal Fee</div>
                    </div>
                    <div className='text-end'>
                        <div className='py-2'>
                            <img src={gmi_img7_url} width={22} className='mr-10'/><span className='color-white font-14 bold-700 '>ETH GM</span>
                        </div>
                        <div className='color-white font-14 bold-400  py-2'>1.060</div>
                        <div className='color-white font-14 bold-400  py-2'>405,522.98</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>45.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                        <div className='color-white font-14 bold-400  py-2'>0.00%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}