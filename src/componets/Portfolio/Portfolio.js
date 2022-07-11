import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Portfolio = () => {
    const percentage = 66;

    return (
        <div>
             <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <h1 className='text-6xl pt-36 px-4 text-blue-600 font-bold'>Abdur Rahim</h1>
  <p className='px-4 text-2xl'>webdeveloper</p>
<div className='mt-20 mx-4'>
    <h2 className='text-2xl font-bold uppercase mt-4'>work exprience</h2>
    <h4 className='text-xl text-blue-600'>Ceo of apna  college</h4>
    <h4 style={{fontSize:'18px',fontWeight:'bold'}}>Emplyer</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque magni voluptatibus quos corrupti, nam explicabo, amet sit deleniti</p>
</div>
<div className='mt-10 mx-4'>
    <h2 className="text-2xl font-bold uppercase mt-4">Education </h2>
    <h4 className='text-xl text-blue-600'>Cse Enginear</h4>
    <h4 style={{fontSize:'18px',}}>Gangkul panchagram adarsha high school</h4>
</div>
<div className='flex '>
<div className='pt-6 mx-4'>
<h2 className="text-2xl font-bold uppercase mt-4">Profession skills </h2>
<div  className='flex '>
  
<div>


<div className='flex justify-around items-center ' style={{ width: 100, height: 50 }}>
  <CircularProgressbar value={percentage} text={`${percentage}%`} />
    <span className='text-xl px-2'>HTML</span></div>
<div className='flex justify-around items-center ' style={{ width: 80, height: 50 }}>
  <CircularProgressbar value={percentage} text={`${percentage + 20}%`} />
    <span className='text-xl px-2'>CSS</span></div>




</div>
<div>
  
<div className='flex justify-around items-center ' style={{ width: 100, height: 50 ,fontSize:'30px' }}>
  <CircularProgressbar value={percentage} text={percentage + 10} />
    <span className='text-xl px-2'>React </span></div>
<div className='flex justify-around items-center ' style={{ width: 80, height: 50 }}>
  <CircularProgressbar value={percentage} text={`${percentage + 20}%`} />
    <span className='text-xl px-2'>node </span></div>


</div>
</div>
</div>
<div className='pt-6 mx-6'>
<h2 className="text-2xl font-bold uppercase mt-4">PortFolio website </h2>
<li className='text-blue-900 list-none font-bold'><a href="https://stock-marketing-521de.web.app/">https://stock-marketing-521de.web.app/</a></li>
<li  className='text-blue-900 list-none font-bold'><a href="https://tourist-booker.web.app/">https://tourist-booker.web.app/</a></li>
<li className='text-blue-900 list-none font-bold'><a href="https://bucolic-sable-801e99.netlify.app/home">https://bucolic-sable-801e99.netlify.app/home</a></li>
<li className='text-blue-900 list-none font-bold'><a href="https://sharp-wilson-0e49b4.netlify.app/">https://sharp-wilson-0e49b4.netlify.app/</a></li>
</div>
</div>


  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-red-100 border-solid text-base-content">
    <div class="avatar">
  <div class="w-3/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={'https://facebook-13d3a.web.app/static/media/rahim.097101fe5fae8ed6bf89.png'} />
  </div>
</div>
      <li className='text-2xl font-bold uppercase mt-4'>Summery</li>
      <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque magni voluptatibus quos corrupti, nam explicabo, amet sit deleniti fugiat aliquam? Est, eos dignissimos?</p>
      <div>
        <li className='text-2xl font-bold uppercase mt-4'>personal information</li>
       <div>
       <li className='text-xl font-bold uppercase mt-4 text-blue-600'>Birth date</li>
        <li className=' font-bold uppercase text-slate-500'>27/10/2005</li>
       </div>
      
       <div>
       <li className='text-xl font-bold uppercase mt-4 text-blue-600'>Nationality</li>
        <li className=' font-bold uppercase text-slate-500'>Bangladeshi</li>
       </div>
      
       <div>
       <li className='text-xl font-bold uppercase mt-4 text-blue-600'>Address</li>
        <li className=' font-bold uppercase text-slate-500'>Bangladesh/sylhet/barlekha</li>
       </div>
      
      </div>
      <div>
        <li className='text-2xl font-bold uppercase mt-4'>Contact</li>
        <div className='flex '><img width={35} className={'bg-blue-300 mx-1 rounded-lg'} src="https://www.resumemaker.online/img/email.png" alt="" /> <span className='text-slate-500 font-bold'>itabdurrahim22@gmail.com</span>
        </div>
        <div className='flex mt-2'><img width={35} className={'bg-blue-300 mx-1 rounded-lg'} src="https://www.resumemaker.online/img/tel.png" alt="" /> <span className='text-slate-500 font-bold'><a href='https://api.whatsapp.com/send/?phone=%2B8801609923033&text&app_absent=0'>01609923033</a></span>
        </div>
        <div className='flex mt-2'><img width={35} className={'bg-blue-300 mx-1 rounded-lg'} src="https://www.resumemaker.online/img/linkedin.png" alt="" /> <span className='text-blue-600 font-bold'><a href="https://www.linkedin.com/in/abdur-rahim-559a15231/">Abdur Rahim</a></span>
        </div>
        <div className='flex mt-2'><img width={35} className={'bg-blue-300 mx-1 rounded-lg'} src="https://www.resumemaker.online/img/github.png" alt="" /> <span className='text-blue-600 font-bold'><a href="https://github.com/r3ahim">r3ahim</a></span>
        </div>
      </div>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Portfolio;