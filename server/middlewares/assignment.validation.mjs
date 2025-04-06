export const validateAssignmentData = (req, res, next) => {
    const { title, content, category, email } = req.body;
  
    
    if (!title) {
      return res.status(400).json({
        message: "กรุณาส่งข้อมูล Title ของแบบทดสอบเข้ามาด้วย"
      });
    }
  
    
    if (!content) {
      return res.status(400).json({
        message: "กรุณาส่งข้อมูล Content ของแบบทดสอบเข้ามาด้วย"
      });
    }
  
    if (content.length < 500 || content.length > 1000) {
      return res.status(400).json({
        message: "Content ต้องมีความยาวระหว่าง 500 ถึง 1000 ตัวอักษร"
      });
    }
  
    
    if (!category) {
      return res.status(400).json({
        message: "กรุณาส่งข้อมูล Category ของแบบทดสอบเข้ามาด้วย"
      });
    }
  
    const allowedCategories = ["Math", "English", "Biology"];
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        message: "Category ต้องเป็นหนึ่งใน Math, English หรือ Biology เท่านั้น"
      });
    }
  
    
    if (!email) {
      return res.status(400).json({
        message: "กรุณาส่ง Email ของผู้สร้างแบบทดสอบเข้ามาด้วย"
      });
    }
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Email ไม่ถูกต้องตามรูปแบบ"
      });
    }
  
  
    next();
  };
  