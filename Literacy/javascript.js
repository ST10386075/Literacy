src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"

  // Replace these with your actual values
  const SUPABASE_URL = 'https://qmkkbibzvmzsrobttcbc.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFta2tiaWJ6dm16c3JvYnR0Y2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDU3NzEsImV4cCI6MjA2NjEyMTc3MX0.7gVbgwruQd9yFUoUIS9DXhlBY7cPKxSQsTwcUR7NVOs';
  const supabaseKey = process.env.SUPABASE_KEY
  // Initialize the client
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const {data: userData, error: userError } = await supabase
      .from ('users')
      .insert([
        {
          email: email,
          username: username,
          role: role,
          auth_id: data.user.id
        }
      ]);
  
  async function testConnection() {
    let { data, error } = await supabase.from('Literacy Connect').select('*');
    console.log(data, error);
  }

  testConnection();

  


// In your login page
localStorage.setItem('teacherData', JSON.stringify({
    name: "Teacher Name",
    email: "teacher@email.com"
}));

// In teacher-dashboard.html, modify the post submission to save like this:
const newPost = {
    teacherName: teacherName,
    title: title,
    content: content,
    date: dateString,
    mediaType: file ? (file.type.startsWith('image/') ? 'image' : 
            file.type.startsWith('video/') ? 'video' : 'document') : null,
    mediaData: file ? URL.createObjectURL(file) : null,
    mediaName: file ? file.name : null,
    mediaContentType: file ? file.type : null
};

// Save to localStorage
const existingPosts = JSON.parse(localStorage.getItem('teacherPosts')) || [];
existingPosts.unshift(newPost); // Add new post to beginning
localStorage.setItem('teacherPosts', JSON.stringify(existingPosts));