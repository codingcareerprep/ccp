async function fetchJobs(url) {
    try {
      document.getElementById('loader').style.display = 'block'; // Show loader
      const response = await fetch(url);
      const jobs = await response.json();
      displayJobs(jobs);
      setupFilters(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      document.getElementById("job-list").innerHTML = `<p>Failed to load job listings. Please try again later.</p>`;
    } finally {
      document.getElementById('loader').style.display = 'none'; // Hide loader
    }
  }
  
  function displayJobs(jobs) {
    const container = document.getElementById("job-list");
    container.innerHTML = "";
  
    if (!jobs.length) {
      container.innerHTML = "<p>No jobs found.</p>";
      return;
    }
  
    const jobList = document.createElement("div");
    jobList.className = "job-list";
  
    jobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.className = "card";
      
      jobCard.innerHTML = `
        <h2>${job["Job Title"]}</h2>
        <p><strong>Company Name:</strong> ${job["Company Name"]}</p>
        <p><strong>Experience:</strong> ${job.Experience}</p>
        <p><strong>Location:</strong> ${job.Location}</p>
        <a href="${job["Apply Link"]}" class="apply-btn" target="_blank">Apply</a>
        <div class="description">
          <h3>Job Description:</h3>
          <p>${job["Job Description"]}</p>
        </div>
      `;
  
      jobList.appendChild(jobCard);
    });
  
    container.appendChild(jobList);
  }
  
  function setupFilters(jobs) {
    const filterTitle = document.getElementById("filter-title");
    const filterExperience = document.getElementById("filter-experience");
    const filterLocation = document.getElementById("filter-location");
    const filterButton = document.getElementById("clear-filters");
  
    // Populate filter options dynamically from the jobs data
    populateFilterOptions(jobs);
  
    filterButton.addEventListener("click", () => {
      const filteredJobs = jobs.filter(job => {
        return (
          (filterTitle.value === "" || job["Job Title"].toLowerCase().includes(filterTitle.value.toLowerCase())) &&
          (filterExperience.value === "" || job.Experience.toLowerCase().includes(filterExperience.value.toLowerCase())) &&
          (filterLocation.value === "" || job.Location.toLowerCase().includes(filterLocation.value.toLowerCase()))
        );
      });
      displayJobs(filteredJobs);
    });
  }
  
  function populateFilterOptions(jobs) {
    const filterTitle = document.getElementById("filter-title");
    const filterExperience = document.getElementById("filter-experience");
    const filterLocation = document.getElementById("filter-location");
  
    // Get unique job titles, experiences, and locations
    const uniqueTitles = Array.from(new Set(jobs.map(job => job["Job Title"])));
    const uniqueExperiences = Array.from(new Set(jobs.map(job => job.Experience)));
    const uniqueLocations = Array.from(new Set(jobs.map(job => job.Location)));
  
    // Populate the filter dropdowns
    populateSelect(filterTitle, uniqueTitles);
    populateSelect(filterExperience, uniqueExperiences);
    populateSelect(filterLocation, uniqueLocations);
  }
  
  function populateSelect(selectElement, options) {
    // Clear existing options
    selectElement.innerHTML = '<option value="">Select</option>';
    
    // Add the new options dynamically
    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      selectElement.appendChild(optionElement);
    });
  }
  
  // Extract query parameter from the URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Determine the API URL to fetch data
  let apiUrl = "https://script.google.com/macros/s/AKfycbwqm8d_m5odh-lDVWOqamBWhpkCicybLgq2qRYKM-VSbwX9QTndj7UMs0-sy3fRn_yPhw/exec";
  const jobId = getQueryParam("jobId");
  
  if (jobId) {
    apiUrl += `?jobId=${jobId}`; // Add query parameter to filter by jobId
  }
  
  // Fetch and display job listings
  fetchJobs(apiUrl);
  