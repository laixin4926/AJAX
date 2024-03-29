let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};
getHTML.onclick =()=>{
    const request =new XMLHttpRequest()
    request.open('GET','/3.html')
  /*   request.onload=()=>{
        console.log('request.response')
        console.log(request.response)
        const div =document.createElement('div')
        div.innerHTML =request.response
        document.body.appendChild(div)

    }
    request.onerror=()=>{
        console.log('失败了')
    } */
    request.onreadystatechange =()=>{
        if(request.readyState===4){
            console.log("下载完成");
            if(request.status>=200 && request.status<300){
                const div =document.createElement('div')
                div.innerHTML =request.response
                document.body.appendChild(div)
            }else{
                alert('加载HTML失败')
            }
        }
    }
    request.send()
}

getJS.onclick =()=>{
    const request =new XMLHttpRequest()
    request.open('GET','/2.js')
  /*   request.onload=()=>{
        console.log('request.response')
        console.log(request.response)
        const script =document.createElement('script')
        script.innerHTML =request.response
        document.body.appendChild(script)

    }
    request.onerror=()=>{
        console.log('失败了')
    } */
    request.onreadystatechange =()=>{
        if(request.readyState===4){
            console.log("下载完成");
            if(request.status>=200 && request.status<300){
                const script =document.createElement('script')
                script.innerHTML =request.response
                document.body.appendChild(script)
            }else{
                alert('加载JS失败')
            }
        }
    }
    request.send()
}

getCSS.onclick =()=>{
    const request = new XMLHttpRequest()

    request.open('GET','/style.css');//readyState=1
  
    request.onreadystatechange =()=>{
        if(request.readyState===4){
            console.log("下载完成");
            if(request.status>=200 && request.status<300){
                const style =document.createElement('style')//创建style标签
                style.innerHTML = request.response//填写style内容

                document.head.appendChild(style)//插到head里面
            }else{
                alert('加载CSS失败')
            }
        }
    }
    request.send()//readyState=2
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest
    request.open("GET","/4.xml")
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 &request.status<300){
                const dom = request.responseXML;
                const text = dom.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim());
            }
        }
    }
    request.send()
}
getJSON.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/5.json");
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log(request.readyState)
            if(request.status>=200 && request.status <300){
                console.log(request.status)
                const object = JSON.parse(request.response)//JSON.parse转为对象
                console.log(object)
                console.log(typeof object)
               /*  myName.textContent =object.name
                console.log(typeof myName.textContent) */

            }
        }
    }
    request.send()
}