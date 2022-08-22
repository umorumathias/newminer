import React from "react";

const Languages = () => {
  return (
    <div>
      <label className="block mb-3" htmlFor="language">
        Language
      </label>
      <select className="select" name="language" id="language">
        <option value="en">English</option>
        <option value="cs">Čeština</option>
        <option value="fr">Français</option>
        <option value="bi">Bahasa Indonesia</option>
        <option value="fa">زبان فارسی</option>
        <option value="pt">Português</option>
        <option value="it">Italiano</option>
        <option value="ja">日本語</option>
        <option value="hu">Magyar</option>
        <option value="ru">Русский</option>
        <option value="vi">tiếng Việt</option>
        <option value="zh_CN">汉语</option>
        <option value="tr">Türkçe</option>
        <option value="ar">عربي</option>
        <option value="th">ภาษาไทย</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default Languages;
