function FunctionalComponent (){
    const names = ['John', 'Haley', 'Sherman']
    return (
      <div>
        <p>I am a functional component </p>
        {names.map((name)=>(
          <p>{name}</p>
        ))}
      </div>
    )
  }

  export {FunctionalComponent}