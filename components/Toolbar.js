import {useRouter } from 'next/router'
import toolStyle from '../styles/Toolbar.module.css'

export const Toolbar =() => {

        const Router = useRouter();

    return (
        <div className={toolStyle.main}>
            <div className={toolStyle.content} onClick= {() => Router.push('/')}>Home</div>
            <div className={toolStyle.content} onClick= {() => Router.push('/covid19')}>Covid19</div>
            <div className={toolStyle.content} onClick= {() => Router.push('/countrystats')}>Provinces</div>
            <div className={toolStyle.content} onClick= {() => window.location.href = 'https://www.instagram.com/_bha_win'}>Instagram</div>
        </div>
    )
}
