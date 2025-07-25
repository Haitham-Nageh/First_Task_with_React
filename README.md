# React +  Vite + Bootstrap Static Website

هذا أول مشروع إلي باستخدام **React** و**Bootstrap**. عملت فيه موقع ستاتيك (static website) بدون Back-End. الهدف من المشروع كان التعلّم على:

- بناء واجهات باستخدام React Components
- استخدام Bootstrap لتنسيق الواجهة
- تطبيق مفهوم **Single Page Application**
- إضافة صور بطريقة الاستيراد داخل React
- استخدام Font Awesome للأيقونات
- تنسيق CSS باستخدام CSS Modules

## 🛠️ التقنيات المستخدمة

- React
- Bootstrap 5
- CSS Modules
- Font Awesome
- JSX
- React Router (إذا استخدمته)


📂 مثال على استخدام الصور

import sixthimg from '../../img/portfolio/submarine.png';
<div className="col-md-4">
  <img src={sixthimg} alt="" className="img-fluid rounded" />
</div>
🎨 مثال على استخدام CSS Modules

import styles from './navbar.module.css';
<nav className={`navbar navbar-expand-lg p-4 text-uppercase ${styles.nav}`}>

🌐 مصدر التيمبلت الأصلي
تم أخذ تصميم التيمبلت من الموقع التالي:
https://startbootstrap.com/previews/freelancer

🔗 رابط الموقع المباشر (على Render)
https://first-task-with-react.onrender.com


## 📦 طريقة تشغيل المشروع

```bash
npm install
npm run dev
