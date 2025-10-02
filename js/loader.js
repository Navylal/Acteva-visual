async function loadSection(id, filePath) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`Gagal load ${filePath}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load tiap section
loadSection("navbar", "sections/navbar.html");
loadSection("hero", "sections/hero.html");
loadSection("portfolio", "sections/portfolio.html");
loadSection("contact", "sections/contact.html");
loadSection("footer", "sections/footer.html");
