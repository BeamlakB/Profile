function initTimelineModals() {
  const modalsData = [
    {
      id: "exp1",
      title: "Super Computing intern @ Los Alamos National Lab",
      text: "During my 11-week HPC internship, I began with a 3-week boot camp where my team and I built a high-performance computing cluster from the ground up. We booted drives, converted nodes into stateless systems, enabled network booting, and implemented OpenChami for cluster management. We deployed a Slurm scheduler for job submission and used Ansible for configuration automation and CI/CD pipelines. Building on this foundation, we developed a containerized GPU-accelerated molecular dynamics workflow using GROMACS with CUDA-aware MPI across two NVIDIA GPU nodes. With Open OnDemand (OOD), we streamlined deployment and visualization—transforming what was once a 30-minute command-line process into a 5-minute web interface interaction, significantly improving efficiency and usability. \n To further enhance performance, I integrated Grafana dashboards with Prometheus to monitor real-time system resource usage, replacing tedious manual checks with intuitive visualizations that supported smarter workflow optimization. I also applied Ruby for UI customizations and worked extensively with Linux system services, gaining experience with web certificates, monitoring tools, and HPC system interactions. By the end of the internship, our team successfully demonstrated the GPU-accelerated workflow and monitoring system, and we submitted our work at SC25, one of the leading HPC conferences. This experience strengthened my skills in cluster management, workflow automation, containerization, GPU computing, and monitoring tools, while also sharpening my teamwork, problem-solving, and technical presentation abilities." ,
      images:"",
      links: {
        Paper: "/page/GPUnicorn_Paper.pdf",
        poster: "/page/GPUnicorn_Final_Poster.pdf",
        Abstract:"/page/GPUnicorn_Abstract.pdf"
      }
    },
    {
    title: "Computer Vison Engineer @ Vectech",
    text: "During my internship at Vectech I focused on improving fine-grained mosquito species classification. In previous approaches, Top-K embeddings were randomly initialized and updated during training, which often led to misclassification among similar species. I proposed using static embeddings that incorporate taxonomy knowledge of the species to improve model performance. I generated embeddings using species names and taxonomy levels, reshaped via Gaussian Random Projection, and experimented with two approaches: one where embeddings served as initial weights for an LSTM, and another where embeddings remained constant during training. The dataset contained 32 classes, and I used PyTorch, LSTMs, and static embedding classes to integrate domain knowledge into the model. \n \n Integrating these embeddings significantly improved classification accuracy. Visualization with TSNE and UMAP showed that species were correctly clustered according to their genus and subgenus, with Silhouette Scores increasing from 0.52 to 0.97 and subgenus classification reaching 96% accuracy. Overall model accuracy improved across train, validation, and test sets, with the second static embedding method outperforming the baseline. Specific species like Ae_canadensis and Ae_tormentor increased in accuracy from ~62–66% to 83%. This work taught me advanced embedding techniques, visualization methods for analyzing embeddings, and practical applications of domain knowledge in machine learning, strengthening my skills in fine-grained classification, model evaluation, and Python-based ML workflows.",
    image: "img/TSNE-vec.png",
    links: {
        Experiment_report: "/page/Expermintal_report.pdf",
        Visualization: "/page/TSNE_UMPA_220.pdf"
      
    }
   },
   {
    title:"Graduate Assistant System Admin @ UMBC DOIT",
    text:"As a Graduate Assistant System Administrator at UMBC DOIT, I support High-Performance Computing (HPC) clusters used by over 100 research groups and 1,000+ users. I manage software modules, troubleshoot CPU/GPU workflow issues—including MPI, TensorFlow, PyTorch, and JupyterHub pipelines—and have resolved over 700 tickets. I developed automation scripts using Bash and Google App Manager, reducing ticket handling time by 10 minutes on average, and provide educational interventions to enhance HPC literacy across campus. Collaborating closely with a team of 11 system admins, I have strengthened my skills in HPC cluster management, AI workflow support, Linux administration, and user education in large-scale research environments.",
    links:{
        UMBC_HPC: "https://hpcf.umbc.edu/",
    }
   },
   {
     title:"AI Research @ UMBC:Interactive Robotics and Language Lab",
    text:"As a researcher at UMBC’s Interactive Robotics and Language Lab, I investigated how large language models (LLMs) such as GPT-4, LLAMA-7b, and Mistral-7b interpret multimodal narratives combining text and images. Our methodology involved generating alternative story annotations by systematically altering key conditions and events within the narratives, ensuring coherence and realism across six components: goal, visually grounded entity, condition, alternate condition, alternate event, and rewritten story. I implemented pipelines to process human survey responses and model outputs, and evaluated annotations based on grounding, visual relevance, causal reasoning, and story coherence. This work was conducted on ARL, COIN, and V2C datasets, with GPT-4 handling multimodal inputs while LLAMA and Mistral processed textual inputs. Through this research, I developed expertise in multimodal NLP, LLM evaluation, structured annotation methods, and data pipeline development.",
    image:"/img/IRL_image.png",
    links:{
        Report: "/page/Analysis.pdf",
    }
   }
    
  ];

   const modal = document.getElementById("timeline-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const modalLinks = document.getElementById("modal-links");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = modal.querySelector(".close");

  document.querySelectorAll(".text-box a").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const data = modalsData[index];

      modalTitle.textContent = data.title;
      modalText.textContent = data.text;

      // Show image if exists
      if (data.image) {
        modalImage.src = data.image;
        modalImage.style.display = "block";
      } else {
        modalImage.style.display = "none";
      }

      // Add links
      modalLinks.innerHTML = "";
      for (const [key, value] of Object.entries(data.links)) {
        if (value) {
          const linkEl = document.createElement("a");
          linkEl.href = value;
          linkEl.textContent = key.charAt(0).toUpperCase() + key.slice(1);
          linkEl.target = "_blank";
          linkEl.style.marginRight = "10px";
          modalLinks.appendChild(linkEl);
        }
      }

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}