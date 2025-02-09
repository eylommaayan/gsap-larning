import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // אנימציה עם gsap.from()
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250, // מזיז את התיבה 250 פיקסלים ימינה
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main dir="rtl">
      <h1>Gsap From</h1>

      <p className="mt-5 text-white">
        הפונקציה <code>gsap.from()</code> משמשת להנפשת אלמנטים ממצב חדש למצבם הנוכחי.
      </p>

      <p className="mt-5 text-white">
        הפונקציה <code>gsap.from()</code> דומה לפונקציה{" "}
        <code>gsap.to()</code>, אך ההבדל הוא שהפונקציה{" "}
        <code>gsap.from()</code> מבצעת אנימציה **ממצב חדש למצב הנוכחי**, 
        בעוד שהפונקציה <code>gsap.to()</code> מבצעת אנימציה **מהמצב הנוכחי למצב חדש**.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">📌 איך להשתמש ב-`gsap.from()` ב-React?</h2>
      <p className="mt-3 text-white">
        כדי להשתמש ב-<code>gsap.from()</code> בתוך רכיב **React**, יש לבצע את השלבים הבאים:
      </p>

      <ol className="mt-3 text-white list-decimal list-inside">
        <li>ייבא את <code>gsap</code> ואת <code>useGSAP</code> מ-<code>@gsap/react</code>.</li>
        <li>בתוך פונקציית ה-<code>useGSAP</code>, קרא ל-<code>gsap.from()</code> עם מזהה האלמנט.</li>
        <li>הגדר מאפייני הנפשה כמו מיקום התחלתי (<code>x</code>, <code>y</code>), סיבוב (<code>rotation</code>) ועוד.</li>
        <li>השתמש בפרמטרים <code>repeat</code> ו-<code>yoyo</code> כדי לגרום לאנימציה לחזור על עצמה.</li>
      </ol>

      <p className="mt-3 text-white">
        דוגמה פשוטה להנפשת רכיב מימין לשמאל:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto" dir="ltr">
        <code className="text-green-400">
{`import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MyComponent = () => {
  useGSAP(() => {
    gsap.from("#box", {
      x: 200, // מתחיל 200 פיקסלים ימינה
      opacity: 0, // מתחיל בלתי נראה
      duration: 1.5, // משך האנימציה
      ease: "power3.out",
    });
  }, []);

  return <div id="box" className="w-20 h-20 bg-blue-500 rounded-lg" />;
};

export default MyComponent;`}
        </code>
      </pre>

      <p className="mt-3 text-gray-500">
        קוד זה יגרום לריבוע להופיע **מהצד הימני של המסך בהדרגתיות**, תוך 1.5 שניות.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
