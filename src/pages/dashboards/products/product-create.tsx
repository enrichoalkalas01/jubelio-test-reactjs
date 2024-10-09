import { useParams } from 'react-router-dom';


import WrapperCard from '../../../components/wrappers/wrapper-card';
import RegularInput from '../../../components/general/regular-input';

export default function ProductCreate() {
    const { id } = useParams();
    console.log(id)
    
    return(
        <>
            <section className='w-full'>
                <WrapperCard>
                    <div>
                        <span>Product Create</span>
                    </div>
                    <div className='w-full'>
                        <form>
                            <RegularInput
                                isDisabled={false}
                            />
                        </form>
                    </div>
                </WrapperCard>
            </section>
        </>
    )
}