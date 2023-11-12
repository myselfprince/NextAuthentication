export default function UserProfile({params}: any){
    return(
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Page you are trying to find is highlighted below: </h1>
      
    </div>
  
    <h2 className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center items-center justify-center font-bold">{params.id}</h2>
  </div>
</section>
    )
}