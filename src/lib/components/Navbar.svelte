<script>
    import { page } from '$app/state';
  
    const links = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Posts", href: "/posts" },
      { name: "Contact", href: "/contact" }
    ];
  </script>
  
  <nav class="navbar">
    <ul>
      {#each links as link}
        <li class="{page.url.pathname === link.href ? 'active' : ''}">
          <a href={link.href}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
  
  <style>
    .navbar {
      display: flex;
      justify-content: center;
      background: #333;
      padding: 10px;
    }
    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li a {
      text-decoration: none;
      color: white;
    }
    .active a {
      font-weight: bold;
      color: yellow;
    }
  </style>
  