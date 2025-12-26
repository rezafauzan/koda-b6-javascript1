# Flowchart Switch
```mermaid
flowchart TD

start@{"shape": circle, "label": "Mulai"}
inputIsFeatureActive@{"shape": lean-l, "label": "Input: IS_FEATURE_ACTIVE = #quot;#quot;"}
inputNum@{"shape": lean-l, "label": "Input: num = 100"}
isFeatureActive@{"shape": diamond, "label": "IS_FEATURE_ACTIVE === true"}
isFeatureActiveCaseTrueTrue@{"shape": lean-l, "label": "Output: #quot;Hello#quot;"}
isFeatureActiveCaseFalse@{"shape": diamond, "label": "IS_FEATURE_ACTIVE === false"}
isFeatureActiveCaseFalseOutputTrue@{"shape": lean-l, "label": "Output: #quot;Hi#quot;"}
isFeatureActiveDefault@{"shape": diamond, "label": "num === 100"}
isNumTrue@{"shape": lean-l, "label": "Output: num"}
isNumFalse@{"shape": lean-l, "label": "Output: #quot;Bonjour!#quot;"}
lastOutput@{"shape": lean-l, "label": "Output: #quot;Lanjutan#quot;"}
stop@{"shape": dbl-circ, "label": "Selesai"}

start-->inputIsFeatureActive-->inputNum-->isFeatureActive

isFeatureActive--True-->isFeatureActiveCaseTrueTrue-->lastOutput
isFeatureActive--False-->isFeatureActiveCaseFalse--True-->isFeatureActiveCaseFalseOutputTrue-->lastOutput
isFeatureActiveCaseFalse--False-->isFeatureActiveDefault
isFeatureActiveDefault--True-->isNumTrue-->lastOutput
isFeatureActiveDefault--False-->isNumFalse-->lastOutput-->stop



```