document.addEventListener("DOMContentLoaded", function() {
    // Inject Header
    const headerEl = document.getElementById("main-header");
    if (headerEl) {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        headerEl.innerHTML = `
            <nav>
                <div class="logo-text">st.xavier's</div>
                <ul>
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="gallery.html" class="${currentPage === 'gallery.html' ? 'active' : ''}">Gallery</a></li>
                    <li><a href="facility.html" class="${currentPage === 'facility.html' ? 'active' : ''}">Facility</a></li>
                    <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                    <li><a href="mandatory.html" class="${currentPage === 'mandatory.html' ? 'active' : ''}">Disclosure</a></li>
                </ul>
            </nav>
        `;
    }

    // Inject Footer
    const footerEl = document.getElementById("main-footer");
    if (footerEl) {
        footerEl.innerHTML = `
            <div class="footer-main">
                <div class="footer-info">
                    <div class="footer-logo">SCHOOL</div>
                    <p>Building a legacy of excellence in Bhubaneswar. Empowering students with knowledge, character, and vision.</p>
                    <p style="margin-top: 20px;">📧 info@stxavierbbsr.com</p>
                    <p>📞 +91 674 123 4567</p>
                </div>
                <div class="footer-links">
                    <h4>Navigate</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="facility.html">Facilities</a></li>
                        <li><a href="mandatory.html">Public Disclosure</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="gallery.html">School Gallery</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">Mandatory Portal</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 St. Xavier School, Bhubaneswar.
            </div>
        `;
    }
});