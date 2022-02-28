
Pod::Spec.new do |s|
  s.name         = "RNApm"
  s.version      = "1.0.0"
  s.summary      = "RNApm"
  s.description  = <<-DESC
                  RNApm
                   DESC
  s.license      = "MIT"
  s.homepage     = "https://github.com/hnny09/react-native-syt-apm"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "hnny09" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/hnny09/react-native-syt-apm.git", :tag => "master" }
  s.source_files  = "ios/*.{h,m}"
  s.public_header_files = "ios/*.h"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
