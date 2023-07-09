import css from './page.module.css'

const layout = ({children}) => {
  return (
    <div>
          <h1 className={css.mainTitle}>Our works</h1>
          {children}
    </div>
  )
}

export default layout