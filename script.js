
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uebruygyrwmsqtmskcdz.supabase.co'
//const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlYnJ1eWd5cndtc3F0bXNrY2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNzM2MzYsImV4cCI6MjAzODc0OTYzNn0.kCWtxwaAu7hMbHAy2Q5Dc2-RMWmhrk27a1__32I0y58'
const supabase = createClient(supabaseUrl, supabaseKey)


let emailCounter = 1000;
let saveTimeout;
const saveInterval = 1000; // Time in milliseconds to wait before saving

document.addEventListener('DOMContentLoaded', () => {
    // Toggle skill images
    document.querySelectorAll('.skill h3').forEach(skillHeader => {
        skillHeader.addEventListener('click', () => {
            const imagesDiv = skillHeader.nextElementSibling;
            imagesDiv.classList.toggle('hidden');
        });
    });

    // Language change functions
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        if (lang === 'es') {
            document.querySelector('title').innerText = 'Marc Es Mi Manitas';
            document.getElementById('description').innerHTML = '¡Manitas en Barcelona! Con más de 10 años de experiencia, capaz de todo tipo de trabajos. <strong>Contáctame para una consulta y presupuesto GRATIS.</strong>';
            document.getElementById('contact').querySelector('p').innerText = '¡No dudes en contactarme!';
        } else if (lang === 'en') {
            document.querySelector('title').innerText = 'Marc Is My Handyman';
            document.getElementById('description').innerHTML = 'Handyman based in Barcelona! With more than 10 years of experience, capable of all kinds of work. <strong>Contact me for a FREE consultation and budget.</strong>';
            document.getElementById('contact').querySelector('p').innerText = 'Don\'t hesitate to contact me!';
        }
        // Update skills section
        document.querySelectorAll('[data-es]').forEach(element => {
            element.innerText = element.getAttribute(`data-${lang}`);
        });
    }

    // Change language to Spanish
    document.getElementById('es-btn').addEventListener('click', () => {
        setLanguage('es');
    });

    // Change language to English
    document.getElementById('en-btn').addEventListener('click', () => {
        setLanguage('en');
    });

    // Set initial language
    setLanguage('es');

    // Contact button functionality
    document.getElementById('contact-btn').addEventListener('click', () => {
        window.location.href = `mailto:marcisyourhandyman@gmail.com?subject=Question ${emailCounter++}`;
    });

    ///////Text Board Behaviour////////


    //load the textboard
async function loadContent() {
  const { data, error } = await supabase
    .from('text_board')
    .select('content')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error loading content:', error);
  } else {
    document.getElementById('text-board').innerHTML = data.content || 'Click here and start typing...';
  }
}

// Call loadContent function when the page loads
window.addEventListener('load', loadContent);


   
// Function to save the content to Supabase
async function saveContent() {
    const textBoardContent = document.getElementById('text-board').innerHTML;
    const { data, error } = await supabase
        .from('text_board')
        .upsert([
            { content: textBoardContent, id: 1 }  // Assuming id is 1 for the content
        ]);

    if (error) {
        console.error('Error saving content:', error);
    } else {
        console.log('Content saved:', data);
    }
}

// Debounced function to handle auto-saving
function debounceSaveContent() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveContent, 1000); // Save after 1 second of inactivity
}

// Add event listener to auto-save on content change
document.getElementById('text-board').addEventListener('input', debounceSaveContent);



});