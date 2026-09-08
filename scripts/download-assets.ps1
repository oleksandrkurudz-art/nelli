$assets = @(
  @{ Name = "hero-portrait.png"; Url = "https://www.figma.com/api/mcp/asset/07fbf898-9bb6-46f9-bcda-51001d78ef29" },
  @{ Name = "avatar-1.png"; Url = "https://www.figma.com/api/mcp/asset/0e4e588e-70a9-4dd4-9731-246903f2552d" },
  @{ Name = "avatar-2.png"; Url = "https://www.figma.com/api/mcp/asset/abe25fc2-dabf-4297-b68e-f0b18b48369d" },
  @{ Name = "avatar-3.png"; Url = "https://www.figma.com/api/mcp/asset/b3f9d7ee-7cb1-413b-9ebe-487c03e96b96" },
  @{ Name = "about-1.png"; Url = "https://www.figma.com/api/mcp/asset/81015e86-c224-4bf8-af7d-d4636570533c" },
  @{ Name = "about-2.png"; Url = "https://www.figma.com/api/mcp/asset/4e9f76bd-4136-4cc2-9ff7-34e40f2a3988" },
  @{ Name = "about-3.png"; Url = "https://www.figma.com/api/mcp/asset/04db4219-8b4a-48c7-a677-cbb82bfd9af8" },
  @{ Name = "beauty-1.png"; Url = "https://www.figma.com/api/mcp/asset/401ecd01-4b14-4312-9c01-1a23123bab7c" },
  @{ Name = "beauty-2.png"; Url = "https://www.figma.com/api/mcp/asset/0bf6d918-e3a1-455c-8a3a-be1480b48721" },
  @{ Name = "beauty-3.png"; Url = "https://www.figma.com/api/mcp/asset/5f3fc11d-02c3-4fb9-8d48-57e9fa87b4cf" },
  @{ Name = "audience-1.png"; Url = "https://www.figma.com/api/mcp/asset/fc83d056-6b41-40da-bc5c-5382d1581461" },
  @{ Name = "audience-2.png"; Url = "https://www.figma.com/api/mcp/asset/5f24eaa0-0a9d-4411-9036-cef2e14ba610" },
  @{ Name = "audience-3.png"; Url = "https://www.figma.com/api/mcp/asset/96d80b19-5249-4cb4-af90-5b9356394972" },
  @{ Name = "audience-4.png"; Url = "https://www.figma.com/api/mcp/asset/3c4e7f8f-c5b6-4daf-92f9-3a1920d2168e" },
  @{ Name = "lifestyle-1.png"; Url = "https://www.figma.com/api/mcp/asset/fd021c3a-7eb1-4295-a578-5fddc737101c" },
  @{ Name = "lifestyle-2.png"; Url = "https://www.figma.com/api/mcp/asset/53322add-b428-4ae0-b549-b4a80ab553c0" },
  @{ Name = "lifestyle-3.png"; Url = "https://www.figma.com/api/mcp/asset/74afdd3a-3608-4020-99b7-42dde20e8ce8" },
  @{ Name = "lifestyle-4.png"; Url = "https://www.figma.com/api/mcp/asset/06093e8f-7b82-425e-b4ca-d8afdc99c1f4" },
  @{ Name = "lifestyle-5.png"; Url = "https://www.figma.com/api/mcp/asset/ebd1c4b1-054e-4dd1-8b8d-9c538f797afc" },
  @{ Name = "travel-1.png"; Url = "https://www.figma.com/api/mcp/asset/5144b1fe-b510-465a-999d-7343aa561b54" },
  @{ Name = "travel-2.png"; Url = "https://www.figma.com/api/mcp/asset/d73cff56-5f7e-4954-99f0-4ea345c1ea8f" },
  @{ Name = "travel-3.png"; Url = "https://www.figma.com/api/mcp/asset/87fd6266-394e-4f3e-a212-b6cb18e8777f" },
  @{ Name = "fashion-1.png"; Url = "https://www.figma.com/api/mcp/asset/b7645b19-3c32-412e-9a40-e082b35fd4ad" },
  @{ Name = "fashion-2.png"; Url = "https://www.figma.com/api/mcp/asset/a04231ef-343e-484e-b234-0783f3ccafc7" },
  @{ Name = "instagram.svg"; Url = "https://www.figma.com/api/mcp/asset/5bdfd6a8-6b5a-4dac-ba52-df7ca1e2ae58" },
  @{ Name = "telegram.svg"; Url = "https://www.figma.com/api/mcp/asset/f7cef128-8a68-4090-a656-d23713b851f6" }
)

$target = "D:\project\nelya\public\assets"
New-Item -ItemType Directory -Force $target | Out-Null

foreach ($asset in $assets) {
  Invoke-WebRequest -Uri $asset.Url -OutFile (Join-Path $target $asset.Name) -UseBasicParsing
}
