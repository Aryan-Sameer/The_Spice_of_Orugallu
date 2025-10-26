import { menuCard } from "../utils/menu"

const Menu = () => {
  return (
    <div className='min-h-screen py-20 px-6 grid grid-cols-5 gap-6'>
      {
        menuCard.map((category, index) => {
          return (
            <ul key={index} className="menu bg-base-200 rounded-box w-full">
              <li>
                <h2 className="menu-title">{category.title}</h2>
                <ul className="itemList max-h-80 overflow-y-auto">
                  {
                    category.items.map((item, idx) => {
                      return (
                        <li key={idx} className="flex flex-row justify-between pointer-events-none">
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          )
        })
      }

    </div>
  )
}

export default Menu
