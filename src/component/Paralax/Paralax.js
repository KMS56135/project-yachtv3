<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/master

import "./Paralax.css"
function Paralax ( ) {
    return (
        <>  
            <div className="bg-paralax bg-cover bg-center desktop:bg-top flex justify-center items-center">
                <div className='py-[150px] desktop:min-w-[1200px]'>
                    <div className='page'>
                        <div className='flex flex-wrap flex-col mobile:gap-10 justify-center gap-5  tablet:justify-between desktop:flex-row'>
                            <div className="flex flex-col">
                                <div className='text-white text-[26px] tablet:text-[36px] self-center'>245</div>
                                <div className='h-1 w-14 bg-textOverline self-center'></div>
                                <div className='text-center text-white text-[26px] tablet:text-[26px] self-center'>Ежемесячные чартеры</div>
                            </div>
                            <div className="flex flex-col">
                                <div className='text-white text-[26px] tablet:text-[36px] self-center'>182</div>
                                <div className='h-1 w-14 bg-textOverline self-center'></div>
                                <div className='text-center text-white text-[26px] tablet:text-[26px] self-center'>Яхты во флоте</div>
                            </div>
                            <div className="flex flex-col">
                                <div className='text-white text-[26px] tablet:text-[36px] self-center'>1267</div>
                                <div className='h-1 w-14 bg-textOverline self-center'></div>
                                <div className='text-center text-white text-[26px] tablet:text-[26px] self-center'>Довольные клиенты</div>
                            </div>
                            <div className="flex flex-col">
                                <div className='text-white text-[26px] tablet:text-[36px] self-center'>47</div>
                                <div className='h-1 w-14 bg-textOverline self-center'></div>
                                <div className='text-center text-white text-[26px] tablet:text-[26px] self-center'>Члены команды</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
};

export default Paralax;