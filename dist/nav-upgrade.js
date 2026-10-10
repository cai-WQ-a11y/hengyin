(() => {
  const nav = document.querySelector('.nav nav');
  if (!nav) return;
  nav.innerHTML = `
    <a class="nav-current" href="index.html">Home</a>
    <span class="nav-drop"><a href="about-henlyte.html">About Us</a><span class="nav-menu"><a href="about-henlyte.html">About Us</a><a href="company-profile.html">Company Profile</a></span></span>
    <span class="nav-drop"><a href="products.html">Products</a><span class="nav-menu"><a href="products.html">All Products</a><a href="light-pole.html">Light Pole</a><a href="solar-street-light.html">Solar Street Light</a><a href="led-street-light.html">LED Street Light</a></span></span>
    <a href="knowledge-center.html">News</a><a href="knowledge-center.html">Blog</a><a href="contact.html">Contact Us</a>
    <span class="nav-drop"><a href="solutions.html">Solution</a><span class="nav-menu"><a href="solutions.html">Solutions</a><a href="oem-odm.html">OEM &amp; ODM</a></span></span>
    <a class="quote-btn" href="contact.html">Request A Quote</a><a href="#" aria-label="VR placeholder">VR</a><a class="search-btn" href="#" aria-label="Search">Search</a>`;
  const style = document.createElement('style');
  style.textContent = `.nav nav{gap:26px;font-size:16px;align-items:center}.nav nav>a,.nav-drop>a{white-space:nowrap}.nav-current{color:var(--o);border-bottom:2px solid var(--o);padding:25px 0}.nav-drop{position:relative;display:flex;align-items:center}.nav-drop:after{content:'⌄';margin-left:5px}.nav-menu{display:none;position:absolute;top:calc(100% + 23px);left:-18px;min-width:190px;padding:12px 0;background:#fff;border-top:3px solid var(--o);box-shadow:0 12px 28px #071b4330;z-index:10}.nav-drop:hover .nav-menu{display:block}.nav-menu a{display:block;padding:8px 18px;font-size:14px;white-space:nowrap}.nav-menu a:hover{background:#f5f7fb;color:var(--o)}.quote-btn{background:#06458e;color:#fff!important;border-radius:24px;padding:10px 18px}.search-btn{font-size:0;background:#06458e;color:#fff!important;border-radius:5px;padding:8px 11px}.search-btn:before{content:'⌕';font-size:24px}@media(max-width:900px){.nav nav{gap:12px;font-size:13px}}@media(max-width:620px){.nav nav{gap:10px}.nav nav>a,.nav-drop{display:none}.nav nav .quote-btn{display:inline-block;font-size:12px}.nav-current{display:inline-block}}`;
  document.head.append(style);
})();
