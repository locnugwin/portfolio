<template>
  <section class="intro">
    <img class="profile" src="/profile.jpg" alt="Loc Nguyen" width="720" height="720">
    <div>
      <h1>Loc Nguyen</h1>
      <p>Software Engineer</p>
      <div class="buttons">
        <a class="button" href="mailto:loc@nugwin.net">Email</a>
        <a class="button" href="https://www.linkedin.com/in/locnugwin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="button" href="https://github.com/locnugwin" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  </section>

  <section>
    <p>Hello! I'm Loc, a software engineer.</p>
    <p>I'm a Master's student studying Computer Science at the <a href="https://www.unl.edu/" target="_blank" rel="noopener noreferrer">University of Nebraska-Lincoln</a>, advised by <a href="https://computing.unl.edu/person/rahul-purandare/" target="_blank" rel="noopener noreferrer">Prof. Rahul Purandare</a>. Prior, I received my Bachelor's in Computer Science and Mathematics from Nebraska.</p>
  </section>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: center;
  gap: 48px;
  margin-bottom: 32px;
}

.profile {
  display: block;
  width: 100%;
  max-width: 180px;
  height: auto;
  border-radius: 4px;
}

@media (width <= 680px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
