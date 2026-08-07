# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> User: Verify User Login And Logout
- Location: tests\login.spec.js:42:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('form').locator('button[type="submit"]')
Expected: visible
Error: strict mode violation: locator('form').locator('button[type="submit"]') resolved to 2 elements:
    1) <button dir="ltr" type="submit" kendobutton="" fillmode="solid" themecolor="primary" class="all_btn primary_btn k-button k-button-md k-rounded-md k-button-solid-primary k-button-solid">…</button> aka locator('button').filter({ hasText: 'Search' })
    2) <button dir="ltr" type="submit" kendobutton="" class="all_btn secondary_btn k-button k-button-md k-rounded-md k-button-solid-base k-button-solid">…</button> aka getByRole('button', { name: 'Save Draft' })

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('form').locator('button[type="submit"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - link [ref=e10] [cursor=pointer]:
        - /url: /home
      - generic [ref=e11]:
        - generic [ref=e13]:
          - textbox "Search by thread title and username" [ref=e14]
          - generic [ref=e15]: 
          - generic "Advanced Search" [ref=e16] [cursor=pointer]: 
          - generic:      
        - text:   
      - generic [ref=e18]:
        - navigation [ref=e19]:
          - list [ref=e21]:
            - listitem [ref=e22]:
              - link " (current)" [ref=e23] [cursor=pointer]:
                - /url: /home
                - generic [ref=e24]: 
                - generic [ref=e25]: (current)
            - listitem [ref=e26]:
              - link "" [ref=e27] [cursor=pointer]:
                - /url: /userDashboard
                - generic [ref=e28]: 
            - listitem [ref=e29]:
              - link "" [ref=e30] [cursor=pointer]:
                - /url: /profile
                - generic [ref=e31]: 
        - button " New Thread" [ref=e32] [cursor=pointer]:
          - generic [ref=e33]:
            - generic [ref=e34]: 
            - text: New Thread
        - generic [ref=e36]:
          - button "" [ref=e37] [cursor=pointer]:
            - generic:
              - paragraph
            - generic [ref=e40]: 
          - text:  
  - generic [ref=e44]:
    - generic [ref=e47]:
      - heading "Welcome to OE Discussion Board" [level=1] [ref=e48]
      - paragraph [ref=e49]: A platform where our members can ask questions, engage in conversation, get information, submit opinion polls, and have fun through posts and threads. OE Discussion Board is as quick and easy as sending an email notification and you will have the ability to post images and video.
    - generic [ref=e51]:
      - generic [ref=e55]:
        - generic "You can upload up to 3 media files. The supported image formats include:jpg,jpeg,png,heic,bmp,webp. The supported video formats include:mp4,mkv,webm,avi,mov,mp3." [ref=e57]: 
        - generic [ref=e60]:
          - generic [ref=e61]:
            - tabpanel [ref=e62]:
              - textbox "Give your post a title" [ref=e69]
              - generic [ref=e74]:
                - generic [ref=e75]:
                  - toolbar [ref=e76]:
                    - group [ref=e77]:
                      - button "Bold" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]:
                          - img
                      - button "Italic" [ref=e81] [cursor=pointer]:
                        - generic [ref=e83]:
                          - img
                      - button "Underline" [ref=e84] [cursor=pointer]:
                        - generic [ref=e86]:
                          - img
                      - button "Strikethrough" [ref=e87] [cursor=pointer]:
                        - generic [ref=e89]:
                          - img
                    - group [ref=e90]:
                      - button "Insert unordered list" [ref=e91] [cursor=pointer]:
                        - generic [ref=e93]:
                          - img
                      - button "Insert ordered list" [ref=e94] [cursor=pointer]:
                        - generic [ref=e96]:
                          - img
                    - group [ref=e97]:
                      - button "Insert link" [disabled]:
                        - generic:
                          - generic:
                            - img
                      - button "Remove Link" [disabled]:
                        - generic:
                          - generic:
                            - img
                    - group [ref=e98]:
                      - button "" [ref=e99] [cursor=pointer]:
                        - generic [ref=e100]: 
                  - textbox [ref=e102]:
                    - paragraph [ref=e103]: Type your description here
                - generic [ref=e104]: 0/1000
            - text:  Type your description here  Type your description here
          - generic [ref=e105]:
            - generic [ref=e107]:
              - tablist [ref=e108]:
                - button "" [ref=e109] [cursor=pointer]:
                  - generic [ref=e111]: 
                - button "" [ref=e112] [cursor=pointer]:
                  - generic [ref=e114]: 
                - button "" [ref=e115] [cursor=pointer]:
                  - generic [ref=e117]: 
              - combobox "Select community" [ref=e121]
            - generic [ref=e123]:
              - button "" [ref=e124] [cursor=pointer]:
                - generic [ref=e126]: 
              - button "Save Draft" [ref=e127] [cursor=pointer]:
                - generic [ref=e128]: Save Draft
              - button "Post" [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: Post
      - generic [ref=e136]:
        - generic [ref=e140]:
          - heading "Popular Stars View All" [level=4] [ref=e142]:
            - text: Popular Stars
            - generic [ref=e143] [cursor=pointer]: View All
          - generic [ref=e144]:
            - paragraph [ref=e149] [cursor=pointer]: i.jc_test
            - generic [ref=e150]:
              - generic [ref=e151]:
                - generic [ref=e152]: 
                - text: "18"
              - generic [ref=e153]:
                - generic [ref=e154]: 
                - text: "15"
              - generic [ref=e155]:
                - generic [ref=e156]: 
                - text: "8"
              - generic [ref=e157]:
                - generic [ref=e158]: 
                - text: "3"
              - generic [ref=e159]:
                - generic [ref=e160]: 
                - text: "0"
          - generic [ref=e161]:
            - paragraph [ref=e166] [cursor=pointer]: ijcahpo_admin
            - generic [ref=e167]:
              - generic [ref=e168]:
                - generic [ref=e169]: 
                - text: "15"
              - generic [ref=e170]:
                - generic [ref=e171]: 
                - text: "9"
              - generic [ref=e172]:
                - generic [ref=e173]: 
                - text: "0"
              - generic [ref=e174]:
                - generic [ref=e175]: 
                - text: "4"
              - generic [ref=e176]:
                - generic [ref=e177]: 
                - text: "2"
          - generic [ref=e178]:
            - paragraph [ref=e183] [cursor=pointer]: jay_0000
            - generic [ref=e184]:
              - generic [ref=e185]:
                - generic [ref=e186]: 
                - text: "8"
              - generic [ref=e187]:
                - generic [ref=e188]: 
                - text: "7"
              - generic [ref=e189]:
                - generic [ref=e190]: 
                - text: "3"
              - generic [ref=e191]:
                - generic [ref=e192]: 
                - text: "1"
              - generic [ref=e193]:
                - generic [ref=e194]: 
                - text: "0"
          - generic [ref=e195]:
            - paragraph [ref=e200] [cursor=pointer]: test_u.04
            - generic [ref=e201]:
              - generic [ref=e202]:
                - generic [ref=e203]: 
                - text: "4"
              - generic [ref=e204]:
                - generic [ref=e205]: 
                - text: "0"
              - generic [ref=e206]:
                - generic [ref=e207]: 
                - text: "0"
              - generic [ref=e208]:
                - generic [ref=e209]: 
                - text: "0"
              - generic [ref=e210]:
                - generic [ref=e211]: 
                - text: "0"
          - generic [ref=e212]:
            - paragraph [ref=e217] [cursor=pointer]: testuser_02
            - generic [ref=e218]:
              - generic [ref=e219]:
                - generic [ref=e220]: 
                - text: "1"
              - generic [ref=e221]:
                - generic [ref=e222]: 
                - text: "0"
              - generic [ref=e223]:
                - generic [ref=e224]: 
                - text: "0"
              - generic [ref=e225]:
                - generic [ref=e226]: 
                - text: "5"
              - generic [ref=e227]:
                - generic [ref=e228]: 
                - text: "0"
          - generic [ref=e229]:
            - paragraph [ref=e234] [cursor=pointer]: testuser_01
            - generic [ref=e235]:
              - generic [ref=e236]:
                - generic [ref=e237]: 
                - text: "1"
              - generic [ref=e238]:
                - generic [ref=e239]: 
                - text: "0"
              - generic [ref=e240]:
                - generic [ref=e241]: 
                - text: "0"
              - generic [ref=e242]:
                - generic [ref=e243]: 
                - text: "3"
              - generic [ref=e244]:
                - generic [ref=e245]: 
                - text: "0"
          - generic [ref=e246]:
            - paragraph [ref=e251] [cursor=pointer]: user_ijcahpo
            - generic [ref=e252]:
              - generic [ref=e253]:
                - generic [ref=e254]: 
                - text: "1"
              - generic [ref=e255]:
                - generic [ref=e256]: 
                - text: "0"
              - generic [ref=e257]:
                - generic [ref=e258]: 
                - text: "3"
              - generic [ref=e259]:
                - generic [ref=e260]: 
                - text: "1"
              - generic [ref=e261]:
                - generic [ref=e262]: 
                - text: "1"
          - generic [ref=e263]:
            - paragraph [ref=e268] [cursor=pointer]: user_03
            - generic [ref=e269]:
              - generic [ref=e270]:
                - generic [ref=e271]: 
                - text: "0"
              - generic [ref=e272]:
                - generic [ref=e273]: 
                - text: "0"
              - generic [ref=e274]:
                - generic [ref=e275]: 
                - text: "0"
              - generic [ref=e276]:
                - generic [ref=e277]: 
                - text: "0"
              - generic [ref=e278]:
                - generic [ref=e279]: 
                - text: "0"
          - generic [ref=e280]:
            - paragraph [ref=e285] [cursor=pointer]: Jay OESS
            - generic [ref=e286]:
              - generic [ref=e287]:
                - generic [ref=e288]: 
                - text: "0"
              - generic [ref=e289]:
                - generic [ref=e290]: 
                - text: "0"
              - generic [ref=e291]:
                - generic [ref=e292]: 
                - text: "0"
              - generic [ref=e293]:
                - generic [ref=e294]: 
                - text: "0"
              - generic [ref=e295]:
                - generic [ref=e296]: 
                - text: "0"
          - generic [ref=e297]:
            - paragraph [ref=e302] [cursor=pointer]: Test User05
            - generic [ref=e303]:
              - generic [ref=e304]:
                - generic [ref=e305]: 
                - text: "0"
              - generic [ref=e306]:
                - generic [ref=e307]: 
                - text: "0"
              - generic [ref=e308]:
                - generic [ref=e309]: 
                - text: "0"
              - generic [ref=e310]:
                - generic [ref=e311]: 
                - text: "0"
              - generic [ref=e312]:
                - generic [ref=e313]: 
                - text: "0"
        - generic [ref=e315]:
          - generic [ref=e316]:
            - tablist [ref=e317]:
              - tab " Recent" [selected] [ref=e318] [cursor=pointer]:
                - generic [ref=e319]:
                  - generic [ref=e320]: 
                  - text: Recent
              - tab " Popular" [ref=e321] [cursor=pointer]:
                - generic [ref=e322]:
                  - generic [ref=e323]: 
                  - text: Popular
              - tab " Posted by Admin" [ref=e324] [cursor=pointer]:
                - generic [ref=e325]:
                  - generic [ref=e326]: 
                  - text: Posted by Admin
            - combobox "Select Community" [ref=e328] [cursor=pointer]:
              - generic [ref=e330]: Select Community
              - button "Select" [ref=e331]:
                - generic [ref=e333]:
                  - img
          - generic [ref=e336]:
            - generic [ref=e337]:
              - generic [ref=e338]:
                - generic [ref=e342]:
                  - generic [ref=e344] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e346]:
                    - generic [ref=e347]: 
                    - text: 1 hour ago
                - link "Following" [ref=e348] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e349]:
                - generic [ref=e350]:
                  - generic [ref=e351] [cursor=pointer]: Video+IMG post test
                  - region "Message preview" [ref=e352] [cursor=pointer]:
                    - paragraph [ref=e353]: Let's see the result here
                - button "" [ref=e357] [cursor=pointer]:
                  - generic [ref=e358]: 
              - generic [ref=e359]:
                - generic [ref=e360]:
                  - button " 0" [ref=e361] [cursor=pointer]:
                    - generic [ref=e363]:  0
                  - button " 0" [ref=e364] [cursor=pointer]:
                    - generic [ref=e366]:  0
                  - button " 0" [ref=e367] [cursor=pointer]:
                    - generic [ref=e369]:  0
                  - button " 1" [ref=e370] [cursor=pointer]:
                    - generic [ref=e372]:  1
                  - button "" [ref=e373] [cursor=pointer]:
                    - generic [ref=e375]: 
                - button "" [ref=e377] [cursor=pointer]:
                  - generic [ref=e379]: 
            - generic [ref=e380]:
              - generic [ref=e381]:
                - generic [ref=e385]:
                  - generic [ref=e387] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e389]:
                    - generic [ref=e390]: 
                    - text: 1 hour ago
                - link "Following" [ref=e391] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e392]:
                - generic [ref=e393]:
                  - generic [ref=e394] [cursor=pointer]: IMG upload test
                  - region "Message preview" [ref=e395] [cursor=pointer]:
                    - paragraph [ref=e396]: I am uploading images to test image slider, specifically
                - button "" [ref=e400] [cursor=pointer]:
                  - generic [ref=e401]: 
              - generic [ref=e402]:
                - generic [ref=e403]:
                  - button " 0" [ref=e404] [cursor=pointer]:
                    - generic [ref=e406]:  0
                  - button " 0" [ref=e407] [cursor=pointer]:
                    - generic [ref=e409]:  0
                  - button " 0" [ref=e410] [cursor=pointer]:
                    - generic [ref=e412]:  0
                  - button " 2" [ref=e413] [cursor=pointer]:
                    - generic [ref=e415]:  2
                  - button "" [ref=e416] [cursor=pointer]:
                    - generic [ref=e418]: 
                - button "" [ref=e420] [cursor=pointer]:
                  - generic [ref=e422]: 
            - generic [ref=e423]:
              - generic [ref=e424]:
                - generic [ref=e428]:
                  - generic [ref=e430] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e432]:
                    - generic [ref=e433]: 
                    - text: 1 hour ago
                - link "Following" [ref=e434] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e435]:
                - generic [ref=e436]:
                  - generic [ref=e437] [cursor=pointer]: Media test 1
                  - region "Message preview" [ref=e438] [cursor=pointer]:
                    - paragraph [ref=e439]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e440]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e441]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e442]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e443]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e444]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e445]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e446]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e447]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e448]: Testing for 1 images and 1 video. Let's test the length for maximum 1000 (One Thousand) also.
                    - paragraph [ref=e449]: Testing for 1 images and 1 video. Let's test the length for maximum 10
                - button "" [ref=e453] [cursor=pointer]:
                  - generic [ref=e454]: 
              - generic [ref=e455]:
                - generic [ref=e456]:
                  - button " 0" [ref=e457] [cursor=pointer]:
                    - generic [ref=e459]:  0
                  - button " 0" [ref=e460] [cursor=pointer]:
                    - generic [ref=e462]:  0
                  - button " 0" [ref=e463] [cursor=pointer]:
                    - generic [ref=e465]:  0
                  - button " 0" [ref=e466] [cursor=pointer]:
                    - generic [ref=e468]:  0
                  - button "" [ref=e469] [cursor=pointer]:
                    - generic [ref=e471]: 
                - button "" [ref=e473] [cursor=pointer]:
                  - generic [ref=e475]: 
            - generic [ref=e476]:
              - generic [ref=e477]:
                - generic [ref=e481]:
                  - generic [ref=e483] [cursor=pointer]: testuser_02
                  - generic [ref=e485]:
                    - generic [ref=e486]: 
                    - text: 3 hours ago
                - link " Follow" [ref=e487] [cursor=pointer]:
                  - /url: javascript:void(0)
                  - generic [ref=e488]: 
                  - text: Follow
              - generic [ref=e490]:
                - generic [ref=e491] [cursor=pointer]: User2 Thread
                - region "Message preview" [ref=e492] [cursor=pointer]:
                  - paragraph [ref=e493]: Thread by user 2
              - generic [ref=e494]:
                - generic [ref=e495]:
                  - button " 0" [ref=e496] [cursor=pointer]:
                    - generic [ref=e498]:  0
                  - button " 0" [ref=e499] [cursor=pointer]:
                    - generic [ref=e501]:  0
                  - button " 0" [ref=e502] [cursor=pointer]:
                    - generic [ref=e504]:  0
                  - button " 0" [ref=e505] [cursor=pointer]:
                    - generic [ref=e507]:  0
                  - button "" [ref=e508] [cursor=pointer]:
                    - generic [ref=e510]: 
                - button "" [ref=e512] [cursor=pointer]:
                  - generic [ref=e514]: 
            - generic [ref=e515]:
              - generic [ref=e516]:
                - generic [ref=e520]:
                  - generic [ref=e522] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e524]:
                    - generic [ref=e525]: 
                    - text: 3 hours ago
                - link "Following" [ref=e526] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e528]:
                - generic [ref=e529] [cursor=pointer]: 2nd Scheduled post
                - region "Message preview" [ref=e530] [cursor=pointer]:
                  - paragraph [ref=e531]: 2nd post to schedule. Making at 13:29 and Post at 15:35
              - generic [ref=e532]:
                - generic [ref=e533]:
                  - button " 0" [ref=e534] [cursor=pointer]:
                    - generic [ref=e536]:  0
                  - button " 0" [ref=e537] [cursor=pointer]:
                    - generic [ref=e539]:  0
                  - button " 0" [ref=e540] [cursor=pointer]:
                    - generic [ref=e542]:  0
                  - button " 0" [ref=e543] [cursor=pointer]:
                    - generic [ref=e545]:  0
                  - button "" [ref=e546] [cursor=pointer]:
                    - generic [ref=e548]: 
                - button "" [ref=e550] [cursor=pointer]:
                  - generic [ref=e552]: 
            - generic [ref=e553]:
              - generic [ref=e554]:
                - generic [ref=e558]:
                  - generic [ref=e560] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e562]:
                    - generic [ref=e563]: 
                    - text: 3 hours ago
                - link "Following" [ref=e564] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e566]:
                - generic [ref=e567] [cursor=pointer]: Scheduled Thread
                - region "Message preview" [ref=e568] [cursor=pointer]:
                  - paragraph [ref=e569]: I am drafting this at 13:22 and will be posted on 15:30.
                  - paragraph [ref=e570]: Updating to check updated time.
              - generic [ref=e571]:
                - generic [ref=e572]:
                  - button " 0" [ref=e573] [cursor=pointer]:
                    - generic [ref=e575]:  0
                  - button " 0" [ref=e576] [cursor=pointer]:
                    - generic [ref=e578]:  0
                  - button " 0" [ref=e579] [cursor=pointer]:
                    - generic [ref=e581]:  0
                  - button " 0" [ref=e582] [cursor=pointer]:
                    - generic [ref=e584]:  0
                  - button "" [ref=e585] [cursor=pointer]:
                    - generic [ref=e587]: 
                - button "" [ref=e589] [cursor=pointer]:
                  - generic [ref=e591]: 
            - generic [ref=e592]:
              - generic [ref=e593]:
                - generic [ref=e597]:
                  - generic [ref=e599] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e601]:
                    - generic [ref=e602]: 
                    - text: 6 hours ago
                - link "Following" [ref=e603] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e605]:
                - generic [ref=e606] [cursor=pointer]: Test Thread 2
                - region "Message preview" [ref=e607] [cursor=pointer]:
                  - list [ref=e608]:
                    - listitem [ref=e609]:
                      - paragraph [ref=e610]: Testing threads
                    - listitem [ref=e611]:
                      - paragraph [ref=e612]: points to test - comment, report, likes
              - generic [ref=e614]: AI/ML
              - generic [ref=e615]:
                - generic [ref=e616]:
                  - button " 2" [ref=e617] [cursor=pointer]:
                    - generic [ref=e619]:  2
                  - button " 0" [ref=e620] [cursor=pointer]:
                    - generic [ref=e622]:  0
                  - button " 4" [ref=e623] [cursor=pointer]:
                    - generic [ref=e625]:  4
                  - button " 25" [ref=e626] [cursor=pointer]:
                    - generic [ref=e628]:  25
                  - button "" [ref=e629] [cursor=pointer]:
                    - generic [ref=e631]: 
                - button "" [ref=e633] [cursor=pointer]:
                  - generic [ref=e635]: 
            - generic [ref=e636]:
              - generic [ref=e637]:
                - generic [ref=e641]:
                  - generic [ref=e643] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e645]:
                    - generic [ref=e646]: 
                    - text: 7 hours ago
                - link "Following" [ref=e647] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e649]:
                - generic [ref=e650] [cursor=pointer]: New Test
                - region "Message preview" [ref=e651] [cursor=pointer]:
                  - list [ref=e652]:
                    - listitem [ref=e653]:
                      - paragraph [ref=e654]: Thread Test
              - generic [ref=e655]:
                - generic [ref=e656]:
                  - button " 2" [ref=e657] [cursor=pointer]:
                    - generic [ref=e659]:  2
                  - button " 0" [ref=e660] [cursor=pointer]:
                    - generic [ref=e662]:  0
                  - button " 2" [ref=e663] [cursor=pointer]:
                    - generic [ref=e665]:  2
                  - button " 19" [ref=e666] [cursor=pointer]:
                    - generic [ref=e668]:  19
                  - button "" [ref=e669] [cursor=pointer]:
                    - generic [ref=e671]: 
                - button "" [ref=e673] [cursor=pointer]:
                  - generic [ref=e675]: 
            - generic [ref=e676]:
              - generic [ref=e677]:
                - generic [ref=e681]:
                  - generic [ref=e683] [cursor=pointer]: test_u.04
                  - generic [ref=e685]:
                    - generic [ref=e686]: 
                    - text: 1 day ago
                - link " Follow" [ref=e687] [cursor=pointer]:
                  - /url: javascript:void(0)
                  - generic [ref=e688]: 
                  - text: Follow
              - generic [ref=e689]:
                - generic [ref=e690]:
                  - generic [ref=e691] [cursor=pointer]: Show Us Your Desk Setup Discussion Thread
                  - region "Message preview" [ref=e692] [cursor=pointer]:
                    - paragraph [ref=e693]: A desk setup often reflects a person's personality, interests, and daily routine. Whether it is a gaming battlestation, a productive work-from-home setup, a study desk, or a minimalist workspace, everyone has their own unique style. Some people focus on clean aesthetics and organization, while others enjoy RGB lighting, multiple monitors, collectibles, speakers, and custom peripherals. A great desk setup can improve productivity, comfort, and overall enjoyment while working, studying, or gaming. Are you using a mechanical keyboard, ultrawide monitor, monitor arm, desk shelf, or any unique gadgets? You can also share setup inspiration, budget-friendly recommendations, before-and-after transformations, or dream desk setups you hope to build someday. Whether your setup is simple or fully customized, feel free to share your photos, ideas, and experiences with fellow setup enthusiasts. Meet me in the Comment Section Below! ⬇️
                - button "" [ref=e699] [cursor=pointer]:
                  - generic [ref=e700]: 
              - generic [ref=e702]: Tech Trends
              - generic [ref=e704]: Deep Learning
              - generic [ref=e705]:
                - generic [ref=e706]:
                  - button " 0" [ref=e707] [cursor=pointer]:
                    - generic [ref=e709]:  0
                  - button " 0" [ref=e710] [cursor=pointer]:
                    - generic [ref=e712]:  0
                  - button " 0" [ref=e713] [cursor=pointer]:
                    - generic [ref=e715]:  0
                  - button " 1" [ref=e716] [cursor=pointer]:
                    - generic [ref=e718]:  1
                  - button "" [ref=e719] [cursor=pointer]:
                    - generic [ref=e721]: 
                - button "" [ref=e723] [cursor=pointer]:
                  - generic [ref=e725]: 
            - generic [ref=e726]:
              - generic [ref=e727]:
                - generic [ref=e731]:
                  - generic [ref=e733] [cursor=pointer]: ijcahpo_admin
                  - generic [ref=e735]:
                    - generic [ref=e736]: 
                    - text: 7 days ago
                - link "Following" [ref=e737] [cursor=pointer]:
                  - /url: javascript:void(0)
              - generic [ref=e738]:
                - generic [ref=e739]:
                  - generic [ref=e740] [cursor=pointer]: Most Underrated Tech Gadget Discussion Thread
                  - region "Message preview" [ref=e741] [cursor=pointer]:
                    - list [ref=e742]:
                      - listitem [ref=e743]:
                        - paragraph [ref=e744]: Not every great gadget becomes popular or receives the attention it deserves. Sometimes the most useful tech products are the ones that quietly improve your daily life without making headlines.
                      - listitem [ref=e745]:
                        - paragraph [ref=e746]: Whether it's a compact desk accessory, a portable device, a productivity tool, a budget-friendly gadget, or a hidden gem that few people know about, underrated tech can often provide incredible value and convenience. This thread is open for discussing the most underrated tech gadgets you have ever used.
                      - listitem [ref=e747]:
                        - paragraph [ref=e748]: What is a device or accessory that you think more people should know about? Has a small or inexpensive gadget significantly improved your productivity, gaming experience, comfort, or daily routine? You can also share recommendations for useful desk accessories, smart devices, travel gadgets, cable management solutions, productivity tools, or tech products that exceeded expectations despite not being very popular.
                - button "" [ref=e752] [cursor=pointer]:
                  - generic [ref=e753]: 
              - generic [ref=e754]:
                - generic [ref=e755]:
                  - button " 0" [ref=e756] [cursor=pointer]:
                    - generic [ref=e758]:  0
                  - button " 0" [ref=e759] [cursor=pointer]:
                    - generic [ref=e761]:  0
                  - button " 0" [ref=e762] [cursor=pointer]:
                    - generic [ref=e764]:  0
                  - button " 0" [ref=e765] [cursor=pointer]:
                    - generic [ref=e767]:  0
                  - button "" [ref=e768] [cursor=pointer]:
                    - generic [ref=e770]: 
                - button "" [ref=e772] [cursor=pointer]:
                  - generic [ref=e774]: 
        - generic [ref=e777]:
          - heading "Top Communities View All" [level=4] [ref=e778]:
            - text: Top Communities
            - generic [ref=e779] [cursor=pointer]: View All
          - generic [ref=e784]:
            - generic [ref=e786] [cursor=pointer]: AI/ML
            - generic [ref=e788] [cursor=pointer]: Deep Learning
            - generic [ref=e790] [cursor=pointer]: Tech Trends
            - generic [ref=e792] [cursor=pointer]: Sports Hub
          - separator [ref=e793]
          - heading "My Communities View All" [level=4] [ref=e794]:
            - text: My Communities
            - generic [ref=e795] [cursor=pointer]: View All
          - generic [ref=e802] [cursor=pointer]: AI/ML
        - text:                                                                                
  - generic:
    - contentinfo [ref=e803]:
      - generic [ref=e806]:
        - list [ref=e808]:
          - listitem [ref=e809]:
            - link "Contact Us" [ref=e810] [cursor=pointer]:
              - /url: /contactUs
          - listitem [ref=e811]:
            - link "Terms of Use" [ref=e812] [cursor=pointer]:
              - /url: https://documents.jcahpo.org/documents/JCAHPOTermsofUse.pdf
          - listitem [ref=e813]:
            - link "Platform Guidelines" [ref=e814] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e815]:
            - link "Privacy Policy" [ref=e816] [cursor=pointer]:
              - /url: https://documents.jcahpo.org/documents/JCAHPOPrivacyPolicy.pdf
          - listitem [ref=e817]:
            - link "© 2026 OpenEyes Technologies Inc." [ref=e818] [cursor=pointer]:
              - /url: "#"
        - list [ref=e821]:
          - listitem [ref=e822]:
            - link "" [ref=e823] [cursor=pointer]:
              - /url: https://www.facebook.com/jcahpo
              - generic [ref=e824]: 
          - listitem [ref=e825]:
            - link "" [ref=e826] [cursor=pointer]:
              - /url: https://www.instagram.com/ijcahpo/
              - generic [ref=e827]: 
    - text:  
```

# Test source

```ts
  1  | // Tests: Admin and User login flows with validations and sign out
  2  | const { test, expect } = require('@playwright/test');
  3  | const { LoginPage } = require('../pages/LoginPage');
  4  | const { DashboardPage } = require('../pages/DashboardPage');
  5  | const creds = require('../testData/credentials.json');
  6  | 
  7  | // Admin login test
  8  | test('Admin: Verify Admin User Login And Logout', async ({ page }) => {
  9  |   const loginPage = new LoginPage(page);
  10 |   const dashboard = new DashboardPage(page);
  11 | 
  12 |   await loginPage.goto();
  13 |   await loginPage.selectOrganisation(creds.admin.organisation);
  14 |   await loginPage.login(creds.admin.email, creds.admin.password);
  15 | 
  16 |   // Validate Add Organization button and text
  17 |   let passed = true;
  18 |   try {
  19 |     await dashboard.expectAddOrganizationVisible(10000);
  20 |     const text = await dashboard.getAddOrganizationText();
  21 |     if (text === 'Add Organization') {
  22 |       console.log('its correct');
  23 |     } else {
  24 |       console.log('its not logging in');
  25 |       passed = false;
  26 |     }
  27 |     expect(text).toBe('Add Organization');
  28 |   } catch (err) {
  29 |     console.log('its not logging in');
  30 |     passed = false;
  31 |     throw err;
  32 |   }
  33 | 
  34 |   // Logout
  35 |   await dashboard.logout();
  36 |   const loginButton = page.locator('form >> button[type="submit"]');
  37 |   await expect(loginButton).toBeVisible({ timeout: 10000 });
  38 |   await expect(page).toHaveURL(/.*\/login/);
  39 | });
  40 | 
  41 | // User login test (separate)
  42 | test('User: Verify User Login And Logout', async ({ page }) => {
  43 |   const loginPage = new LoginPage(page);
  44 |   const dashboard = new DashboardPage(page);
  45 | 
  46 |   await loginPage.goto();
  47 |   await loginPage.selectOrganisation(creds.user.organisation);
  48 |   await loginPage.login(creds.user.email, creds.user.password);
  49 | 
  50 |   // Validate username in profile area
  51 |   try {
  52 |     const username = await dashboard.getUsernameText();
  53 |     if (username === creds.user.expectedUsername) {
  54 |       console.log('its correct');
  55 |     } else {
  56 |       console.log('its not logging in');
  57 |     }
  58 |     expect(username).toBe(creds.user.expectedUsername);
  59 |   } catch (err) {
  60 |     console.log('its not logging in');
  61 |     throw err;
  62 |   }
  63 | 
  64 |   // Logout
  65 |   await dashboard.logout();
  66 |   const loginButton = page.locator('form >> button[type="submit"]');
> 67 |   await expect(loginButton).toBeVisible({ timeout: 10000 });
     |                             ^ Error: expect(locator).toBeVisible() failed
  68 |   await expect(page).toHaveURL(/.*\/login/);
  69 | });
  70 | 
```