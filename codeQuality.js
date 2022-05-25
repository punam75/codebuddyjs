// level {1/2/3}
async function GET_daTA() {
    let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let DATA = await r.json();
    return DATA;
  }

  useEffect(() => {
    async function GET_daTA(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let DATA = await r.json();
    console.log(DATA)
    }
  
    GET_daTA()
  },[])
  