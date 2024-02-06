import Button from "./Button"

function Slogan() {
  return (
    <div className="flex flex-col sm:text-[3.4rem] md:text-[3.8rem] text-slate-100 font-bold mb-2 w-[25%] ">
        <p className="-mb-4">Connect</p>
  <p className="-mb-4">Share</p>
  <p className="mb-2">Explore</p>
        <Button size='medium' customStyle={{ fontSize: "1.4rem"}}>Connect</Button>
    </div>
  )
}

export default Slogan
