import React from 'react'
import { useTranslation } from "react-i18next";

function Courses() {
      const { t } = useTranslation(); 
  return (
   <>
    <div>{t("nav.courses")}</div>   
   </>

  )
}

export default Courses;