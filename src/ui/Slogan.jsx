import Button from "./Button"

function Slogan() {
  return (
    <div className="flex flex-col text-4xl sm:text-6xl text-slate-100 font-semibold sm:font-bold gap-2 ">
        <p>Connect</p>
        <p>Share</p>
      <p className='mb-4'>Explore</p>
      <Button size='medium' customStyle={{fontSize: "1.4rem"}}>Connect</Button>
    </div>
  )
}

export default Slogan
