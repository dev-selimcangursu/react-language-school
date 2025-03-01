import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function MasterLayout(props)
{
    return(
        <>
          <Header/>
          <div className='main'>
            {props.children}
          </div>
          <Footer/>
        </>
    )
}
