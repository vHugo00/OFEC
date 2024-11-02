import Novorizontino from '../../../assets/images/novorizontino.png'
import Operario from '../../../assets/images/ofec.png'
export function Games() {
  return (
    <div className='border rounded-lg border-zinc-200 dark:border-zinc-800 mb-2 pt-4'>
      <div className='flex justify-center'>
        <p className='text-zinc-400'>Sábado, 09/11 - 17:00</p>
      </div>
      <div className="flex gap-4 justify-center p-4">
        <div className="flex flex-col items-center space-x-2">
          <img className="w-8 h-8" src={Novorizontino} alt="" />
          <span className="p-2 block text-sm font-medium text-zinc-700 dark:text-zinc-100">
            Novorizontino
          </span>
        </div>
        <span className='text-zinc-400'>X</span>
        <div className=" flex flex-col items-center space-x-2">
          <img className="w-8 h-8" src={Operario} alt="" />
          <span className="p-2 block text-sm font-medium text-zinc-700 dark:text-zinc-100">
            Operário Fc
          </span>
        </div>
      </div>
    </div>
  )
}