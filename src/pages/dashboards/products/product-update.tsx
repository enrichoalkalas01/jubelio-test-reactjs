import { useParams } from 'react-router-dom';

export default function ProductUpdate() {
    const { id } = useParams();
    console.log(id)
    
    return(
        <>
            Product Update
        </>
    )
}