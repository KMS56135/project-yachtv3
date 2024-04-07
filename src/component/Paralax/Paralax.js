

import "./Paralax.css"
function Paralax ( ) {
    return (
        <>  
            <div className="py-[200px] bg-paralax bg-cover bg-center desktop:bg-top flex justify-center items-center">
                <div className='page'>
                    <div className='flex flex-col gap-y-6 tablet:flex-row tablet:gap-x-6 tablet:justify-between'>
                        <div className="flex flex-col ">
                            <div className='text-white text-[16px] tablet:text-[18px] desktop:text-[22px] self-center'>245</div>
                            <div className='h-px w-14 bg-textOverline self-center'></div>
                            <div className='text-center text-white text-[18px] tablet:text-[17px] desktop:text-[22px] self-center'>Ежемесячные чартеры</div>
                        </div>
                        <div className="flex flex-col">
                            <div className='text-white text-[16px] tablet:text-[18px] self-center desktop:text-[22px]'>182</div>
                            <div className='h-px w-14 bg-textOverline self-center'></div>
                            <div className='text-center text-white text-[18px] tablet:text-[17px] self-center desktop:text-[22px]'>Яхты во флоте</div>
                        </div>
                        <div className="flex flex-col">
                            <div className='text-white text-[16px] tablet:text-[18px] self-center desktop:text-[22px]'>1267</div>
                            <div className='h-px w-14 bg-textOverline self-center'></div>
                            <div className='text-center text-white text-[18px] tablet:text-[17px] self-center desktop:text-[22px]'>Довольные клиенты</div>
                        </div>
                        <div className="flex flex-col">
                            <div className='text-white text-[16px] tablet:text-[18px] self-center desktop:text-[22px]'>47</div>
                            <div className='h-px w-14 bg-textOverline self-center'></div>
                            <div className='text-center text-white text-[18px] tablet:text-[17px] self-center desktop:text-[22px]'>Человек в команде</div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
};

export default Paralax;