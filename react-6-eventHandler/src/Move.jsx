const mouseHandler = () => {
  alert("You have moved mouse")
}

const Move = () => {
  return (
  <section>
    <p style = {{display : 'inline' , backgroundColor : 'red'}} onMouseMove={mouseHandler}>Hover the mouse over my buddy</p>
    </section>
  )
}

export default Move
