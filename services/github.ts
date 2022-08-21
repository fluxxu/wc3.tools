export interface W3CRelease {
  id: number;
  name: string;
  created_at: string;  
  assets: Array<{
    name: string;
    browser_download_url: string;
    download_count: number;
  }>;
}

export async function fetchLatestRelease() {
  const res: W3CRelease = await fetch('https://api.github.com/repos/w3champions/launcher/releases/latest').then(res => res.json());
  return res;
}