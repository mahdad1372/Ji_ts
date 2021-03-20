import React from "react";
import data from "../data/data.json";
const initialState = {
  text: "",
  kala1: "",
  img1: "",
  cost1: "",
  kala2: "",
  img2: "",
  cost2: "",
  kala3: "",
  img3: "",
  cost3: "",

  kala4: "",
  img4: "",
  cost4: "",

  kala5: "",
  img5: "",
  cost5: "",

  kala6: "",
  img6: "",
  cost6: "",

  kala7: "",
  img7: "",
  cost7: "",

  kala8: "",
  img8: "",
  cost8: "",

  kala9: "",
  img9: "",
  cost9: "",
};

const reducer = (state = initialState, action: { type: number }) => {
  const newState = { ...state };

  if (action.type === 1) {
    newState.text = "سوبرماركت بغداد";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 2) {
    newState.text = "سوبرماركت اردن";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 3) {
    newState.text = "سوبرماركت عراق";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }
  if (action.type === 4) {
    newState.text = "سوبرماركت اردن";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 5) {
    newState.text = "عالم فاكهه اردن";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 6) {
    newState.text = "عالم فاكهه بغداد";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 7) {
    newState.text = "عالم الجوال البغداد";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 8) {
    newState.text = "عالم الجوال";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 9) {
    newState.text = "الحلويات بغداد";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  if (action.type === 10) {
    newState.text = "الحلويات بغداد2";
    newState.kala1 = "صبغة شعر لوريال كاستينج كريم جلوس كستنائي فاتح 500 48 مل";
    newState.img1 = "../img/1.jpg";
    newState.cost1 = "ريال 48.95";

    newState.kala2 = "مكرونة قودي خواتم مخططة من سميد القمح 500 جرام";
    newState.img2 = "../img/2.jpg";
    newState.cost2 = "ريال 4.95";

    newState.kala3 = "غسول فم ليسترين زيرو 500 مل";
    newState.img3 = "../img/3.jpg";
    newState.cost3 = "ريال 8.96";

    newState.kala4 = "غسول فم ليسترين زيرو 500 مل";
    newState.img4 = "../img/4.jpg";
    newState.cost4 = "ريال 19.96";
    newState.kala5 = "غسول فم ليسترين زيرو 500 مل";
    newState.img5 = "../img/5.jpg";
    newState.cost5 = "ريال 19.96";
    newState.kala6 = "غسول فم ليسترين زيرو 500 مل";
    newState.img6 = "../img/6.jpg";
    newState.cost6 = "ريال 36.96";
    newState.kala7 = "غسول فم ليسترين زيرو 500 مل";
    newState.img7 = "../img/7.jpg";
    newState.cost7 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/8.jpg";
    newState.cost8 = "ريال 36.96";
    newState.kala8 = "غسول فم ليسترين زيرو 500 مل";
    newState.img8 = "../img/9.jpg";
    newState.cost8 = "ريال 26.96";
  }

  return newState;
};

export default reducer;
