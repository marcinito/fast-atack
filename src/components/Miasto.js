import React,{useRef,useState,useEffect,useContext} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { actionCreator } from '../state/index'
import { bindActionCreators } from 'redux'
import empty from '../img/empty.png'
import chmura from '../img/chmura.png'

import Arena from './Arena'
import tasak from '../img/tasak.png'
import Sklep from './Sklep'
import itemkiReducer from '../state/reducers/itemkiReducer'
import { wearWeapon } from '../state/action-creator/actionCreator'
import shopReducer from '../state/reducers/shopReducer'
import {useNavigate} from 'react-router-dom'





function Miasto() {
 const navigate = useNavigate()
    const dispatch=useDispatch()
let zloto=useSelector(state=>state.zloto.zloto)
let shop=useSelector(state=>state.shop)
let itemki=useSelector(state=>state.itemki)
let noszonaBron=useSelector(state=>state.noszonaBron.noszonaBron)
let wlasneItemki=useSelector(state=>state.wlasneItemki)

const {uzyciePotionaHp,wearWeapon}=bindActionCreators(actionCreator,dispatch)
    const [flag,setFlag]=useState(false)
    const [flag1,setFlag1]=useState(false)
    
    const imgBohater=useSelector(state=>state.hero.hero)
    const nameBohater=useSelector(state=>state.name.name)

    const backpackRef=useRef()
    const openbpRef=useRef()   
    const btnbpRef=useRef()   
    const iloscMiksturRef=useRef() 
    const refJeden=useRef()  
    const refDwa=useRef()  
    const refTrzy=useRef()  
    const refCztery=useRef()  
    const leczenie=()=>{
        itemki.hpPotion.ilosc>0 ? uzyciePotionaHp(50):console.log("Nie masz wystarczajace ilosc potionow")
        itemki.hpPotion.ilosc===0?iloscMiksturRef.current.style.backgroundColor="black":iloscMiksturRef.current.style.backgroundColor="white"
    } 
console.log(shop)
console.log(wlasneItemki)
console.log(noszonaBron)
useEffect(()=>{
dispatch({type:"defaultItem",payload:shop.tasak.name,payload2:shop.tasak.hit,payload3:shop.tasak.nazwa,payload4:shop.tasak.opis,payload5:shop.tasak.iloczyn})
},[])
    const openBp=()=>{
        setFlag(!flag)
        if(flag===true){
backpackRef.current.classList.add("otwartyPlecak")

        }

else if(flag===false){
    backpackRef.current.classList.remove("otwartyPlecak")
   
}
    }

const wezdowalki=(e)=>{
    wearWeapon(e.target.src,e.target.dataset.hit*1,e.target.dataset.iloczyn*1)
    console.log(e.target.dataset.iloczyn)
}


    return (
        <div className="miasto">
            <div className="sky">
                <img className="sky1" src={chmura} alt="chmura"/>
                <img className="sky2" src={chmura} alt="chmura"/>
               
            </div>
            <div className="polozenieMiasta">
            <div className="leftSide"><button onClick={()=>navigate('/arena')} style={{width:"100%",height:"100%"}}>Arena</button></div>
            <div className="bohater">
            <div ><h3 className="nick">{nameBohater}</h3></div> 
                <div className="posBohater">
                  
                <img className="imgBohater" src={imgBohater} alt="bohater"/>
                </div>
                <div className="armor"> <div className="gold"><span>{zloto}</span><img src={itemki.gold} alt="gold"/></div>
                <div className="noszonaBron"><span><img src={noszonaBron.bron} alt="aktualnaItema"/></span></div>
                <div className="noszoneFluidy" ref={iloscMiksturRef} onClick={()=>leczenie()}><p className="iloscFluidowCity">ILOSC FLUIDOW {itemki.hpPotion.ilosc}</p><img src={itemki.hpPotion.name} alt="hp"/></div></div>
       <div className="backpack" >
           <button className="btnbp"  onClick={()=>openBp()} >backpack</button>
           <div className="zamknietyBp" ref={backpackRef} >
               <div  className="miejsce1"  ><img onClick={(e)=>wezdowalki(e)}  alt="" src={wlasneItemki.item1.name} data-hit={wlasneItemki.item1.hit} data-iloczyn={wlasneItemki.item1.iloczyn}/></div>
               <div className="miejsce2"  ><img onClick={(e)=>wezdowalki(e)} ref={refDwa} alt="" src={wlasneItemki.item2.name===null?null:wlasneItemki.item2.name} data-hit={wlasneItemki.item2.hit} data-iloczyn={wlasneItemki.item2.iloczyn}/></div>
               <div className="miejsce3" ><img onClick={(e)=>wezdowalki(e)}  alt="" src={wlasneItemki.item3.name===null?null:wlasneItemki.item3.name} data-hit={wlasneItemki.item3.hit} data-iloczyn={wlasneItemki.item3.iloczyn}/></div>
               <div className="miejsce4"  ><img onClick={(e)=>wezdowalki(e)}  src={wlasneItemki.item4===null?null:wlasneItemki.item4.name} alt="" data-hit={wlasneItemki.item3.hit} data-iloczyn={wlasneItemki.item3.iloczyn}/></div>
           </div>
       </div>
               
              
            </div>

            <div className="rightSide"><button onClick={()=>navigate('/sklep')}>Sklep</button></div>
            </div>
            <div className="ground"></div>
        </div>
    )
}

export default Miasto
