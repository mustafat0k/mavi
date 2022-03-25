import React,{ useState, useEffect} from 'react'


const ProjectView = ({type, profession, category}) => {
    const [data, setData ] = useState(projects)

    return <div className="">
        {/***
         <Modals.StandardModal value="Proje" title="Proje Oluştur" tpye="form"/>
         <Modals.StandardModal value="Proje" title="Projeyi Düzenle" tpye="form"/>
         <Modals.StandardModal value="Proje" title="Projeyi Görüntüle" tpye="view"/>
      
           <div className="">
            {
                profession ? <Listing title="Sektörler"  data={data} /> : null
            }
            {
                category  ? <Listing title="Kategoriler" data={data} /> : null
            }

            
        </div>

      
      
      
      ***/}
   


    </div>
}
export default ProjectView;

const projects = [
    { title:'VoIP, instant messaging and digital distribution', desc:'Web Application',   email:'eileen_h@hotmail.com', role:'Member', date:'03/02/2020', status:'Active' ,  },
    { title:'IOS App Development', desc:'Backend Services', email:'ronnie_vergas@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Octonine POS', desc:'Frontend Web Application',  email:'cookie_lukie@hotmail.com', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Apriorit Driver Development', desc:'Mobile Application', email:'joyce991@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Finance Reviewer APP', desc:'Web Backend Application',  email:'samanthaphil@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Freefly alta 8', desc:'Mobile Services',  email:'taratarara@imaze.edu.du', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Mavic DJI Pro', desc:'Frontend Web Application',  email:'iamfred@imaze.infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
    { title:'Wind Chill App', desc:'', email:'', role:'Admin', date:'03/27/2020', status:'Blocked' ,  },
    {  title:'Zaxe 3D Printing', desc:'',  email:'carolyn_h@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , },
    {  title:'Edelkrone® SliderPlus', desc:'',  email:'brittany1134@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , },
]
