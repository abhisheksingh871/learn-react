import React from 'react'

function Card(props) {
    // console.log(props);
    return (
        
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
            
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
                <div className="flex justify-between ">
                    <h6 className="font-bold text-left ">{props.channel}</h6>
                    <h4>Price</h4>
                </div>
                <div className="flex  justify-between">
                    <p>{props.id}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
/* <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' 
        src="https://images.pexels.com/photos/15087825/pexels-photo-15087825/free-photo-of
        -woman-in-dress-among-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="" width= "384" height="512" />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium'>
              "Tailwind CSS is the only framework that I've seen scale
              on large teams. It's easy to customize, adapts to any design,
              and build size is tiny."
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark: text-sky-400'>Saran Dayan
            </div>
            <div className='text-slate-700 dark: text-slate-500'>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */