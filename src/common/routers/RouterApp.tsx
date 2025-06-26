import { Navigate, Route, Routes } from "react-router-dom"
import { FruitsPage } from "../../pages/fruits/FruitsPage"
import { DetailsFruit } from "../../pages/detailsFruit/DetailsFruit"

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<FruitsPage />} />
      <Route path='/fruit/:id' element={<DetailsFruit />} />
      {/* <Route path='detail' element={<DetailsFruit />} /> */}
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
