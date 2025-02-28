# Domain-Specific Language Overview

Penrose is a unified system for diagramming, rather than one focused on specific domains (as in, say, GraphViz [Ellson et al. 2004] or GroupExplorer [Carter and Ellis 2019]). A unified design enables objects from different domains to coexist in the same diagram. Moreover, effort put into improving system performance or rendering quality is amortized across many different domains.

Users can work in any area of mathematics by writing a Domain program tailored to a given domain, or re-use one of the extisting domains provided by Penrose. This design also empowers users to adopt their own notation and conventions for modeling the domain. Use of domain- and user- specific notation reflects common practice in mathematical writing, where the meaning of a symbol is frequently overloaded depending on context.

Importantly, a Domain schema is purely abstract: it does not define an internal representation for objects, nor does it give definitions to functions or predicates. This level of abstraction is crucial to allow multiple visual representations to later be applied to objects from the same domain.
