import Email_sent from './emai_sent.svg'
import './email_sent.css'

export default function email_sent()
{
    return(
    <>
    <div className="email_sent_div">
     <img src={Email_sent} alt="picture not available" className="xxxx" />
     <p class="p1">Email successfully sent to ...!</p>
     <p>Check your inbox</p>
     </div>
    </>
  )
}