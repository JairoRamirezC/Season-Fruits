
export const GeneralInformation = () => {


  return (
    <div className='general-information-section'>
      <h2>General information</h2>
      <div className='general-information-section__products-found'>
        <p>No. Of Products Found:</p>
        <p>5</p>
      </div>
      <p>Nutritional properties of products found</p>
      <div className='general-information-section__total-section'>
        <div className='general-information-section__total-section--info'>
          <p>Total calories</p>
          <p>150</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total fats</p>
          <p>25</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total sugar</p>
          <p>26</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total carbohydrates</p>
          <p>1220</p>
        </div>
        <div className='general-information-section__total-section--info'>
          <p>Total proteins</p>
          <p>120</p>
        </div>
      </div>
    </div>
  )
}
