
// This is Blog Page

import { useState } from "react";

const BLog = () => {
const [loader,setLoader]=useState(false);

const DownloadPdf=()=>{
    
}
    return (
        <div>
            {/* Heading */}
            <div className='text-center pb-8'>
                <p className='text-3xl'>Download the Question Answer Blog As Pdf</p>
                <button className='bg-red-500 my-8 p-2 rounded text-white font-semibold text-2xl hover:bg-red-700' onClick={DownloadPdf} disabled={!(loader===false)}>{
                    loader?(<span>Downloading</span>):
                    (<span>Download</span>)
                }</button>
            </div>

            {/* Main part */}
            <div>
                <div className='mx-12 my-8'>
                    <p className='text-3xl'>1) The differences between uncontrolled and controlled components.</p>
                    <div className='grid grid-col-1 md:grid-cols-2 mx-8  my-4'>
                        <div className="col border border-black">
                            <p className='text-center font-bold my-2'>CONTROLLED COMPONENT</p>
                            <div className='p-2 text-xl'>
                                <p className='my-2'>i. Controlled component does not maintain its internal state.</p>
                                <p className='mb-2'>ii. Controlled component data is controlled by the parent component.</p>
                                <p className="my-2">iii. Controlled component Accepts its current value as a prop.</p>
                            </div>
                        </div>
                        <div className="col border border-black ">
                            <p className='text-center font-bold my-2'>UNCONTROLLED COMPONENT</p>
                            <div className='p-2 text-xl'>
                                <p className='my-2'>i. Uncontrolled component Maintains its internal state.</p>
                                <p className="mb-2">ii. Uncontrolled component data is controlled by the DOM itself.</p>
                                <p className="mb-2">iii. Uncontrolled component uses a ref for their current values.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-12 my-8'>
                    <p className='text-3xl mb-2'> 2) How to validate React props using PropTypes?</p>
                    <p className='border border-black my-4 mx-8 p-2 text-xl'>Validation is a useful way to force the correct usage of the components. This will help during development to avoid future bugs and problems, once the app becomes larger. App.propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. </p>

                </div>
                <div className='mx-12 my-8'>
                    <p className='text-3xl'>3) The differences between nodejs and express js.</p>
                    <div className='grid grid-col-1 md:grid-cols-2 mx-8  my-4'>
                        <div className="col border border-black">
                            <p className='text-center font-bold my-2 text-xl'>Express.js</p>
                            <div className='p-2 text-xl'>
                                <p className='my-2'>i.It is used to build web-apps using approaches and principles of Node.js.</p>
                                <p className='mb-2'>ii. More features than Node.js.</p>
                                <p className="my-2">iii. It is built on Node.js.</p>
                                <p className="my-2">iv. Framework based on Node.js.</p>
                            </div>
                        </div>
                        <div className="col border border-black ">
                            <p className='text-center font-bold my-2 text-xl'>Node.js</p>
                            <div className='p-2 text-xl'>
                                <p className='my-2'>i. It is used to build server-side, input-output, event-driven apps.</p>
                                <p className="mb-2">ii. Fewer features.</p>
                                <p className="mb-2">iii. It is built on Google’s V8 engine.</p>
                                <p className="mb-2">iv. Run-time platform or environment designed for server-side execution of JavaScript.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-12 my-8'>
                    <p className='text-3xl mb-2'> 4) What is a custom hook, and why will you create a custom hook?</p>
                    <p className='border border-black my-4 mx-8 p-2 text-xl'>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. </p>

                </div>
            </div>

        </div>
    );
};

export default BLog;