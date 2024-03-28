import './Services.css';

const bed = <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v15c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2.5H23v2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v7.5h-2v-1.5c0-1.93-1.57-3.5-3.5-3.5h-2.5c-1.272,0-2.387,.682-3,1.699-.613-1.017-1.728-1.699-3-1.699h-2.5c-1.93,0-3.5,1.57-3.5,3.5v1.5H1V6.5c0-1.93,1.57-3.5,3.5-3.5ZM12.5,14v-1.5c0-1.378,1.121-2.5,2.5-2.5h2.5c1.379,0,2.5,1.122,2.5,2.5v1.5h-7.5Zm-8.5,0v-1.5c0-1.378,1.122-2.5,2.5-2.5h2.5c1.378,0,2.5,1.122,2.5,2.5v1.5H4Zm-3,4v-3H23v3H1Z"/></svg>;

function Services() {
    return ( 
        <>
            <div className="services bg-bgServices">
                <div className='services__icon'>
                    {bed}
                </div>
            </div>
        </>
    )
}
export default Services;